import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  makeStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import CancelIconButton from 'components/shared/Buttons/CancelIconButton';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import Label from 'components/shared/Field/Label';
import { MdDescription } from 'react-icons/md';
import SubmitCompactActions from 'components/shared/layout/SubmitCompactActions'

const useStyles = makeStyles(theme => ({
  textArea: {
    resize: 'none',
    display: 'block',
    height: '5rem',
    minWidth: '100%',
    padding: '.6rem',
    fontFamily: 'inherit',
    fontSize: '1.6rem',
    outline: 'none',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    borderRadius: '4px',
    border: '1px solid #cbd4db',

    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
  textField: {},
}));

const TaskContent = ({ taskId, handleClose }) => {
  const task = useSelector(state => state.tasks.taskList[taskId]);

  const classes = useStyles();

  return (
    <Fragment>
      <DialogTitle id="responsive-dialog-title">
        <Grid container justify="space-between">
          <Grid item>{task.title}</Grid>
          <Grid item>
            <MenuIconButton style={{ marginRight: '1rem' }} handleClose={handleClose} />
            <CancelIconButton handleClose={handleClose} />
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Due Date"
          type="datetime-local"
          variant="outlined"
          defaultValue={Date.now()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Label name="Description" icon={MdDescription} />
        <TextareaAutosize rowsMin={3} className={classes.textArea} placeholder="Add Comment" />
        <SubmitCompactActions />
        {/* <DialogContentText>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText> */}
      </DialogContent>
    </Fragment>
  );
};

TaskContent.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskContent;
