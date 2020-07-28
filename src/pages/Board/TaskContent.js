import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  TextareaAutosize,
  makeStyles,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { GrTextAlignFull, GrBook, GrClock } from 'react-icons/gr';
import SubmitCompactActions from 'components/shared/layout/SubmitCompactActions';
import { GoTag } from 'react-icons/go';
import TaskHeader from './TaskHeader/TaskHeader';

const useStyles = makeStyles(theme => ({
  textArea: {
    resize: 'none',
    display: 'block',
    height: '10rem',
    minHeight: '10rem',
    minWidth: '100%',
    padding: '.6rem',
    fontFamily: 'inherit',
    fontSize: '1.6rem',
    outline: 'none',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    borderRadius: '4px',
    border: '1px solid #cbd4db',
    verticalAlign: 'center',

    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
  textField: {},
}));

const TaskContent = ({ taskId, handleClose }) => {
  const task = useSelector(state => state.tasks.taskList[taskId]);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState();
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);

  const classes = useStyles();

  const TaskPropertyTitle = ({ Icon, text, size, ...rest }) => {
    return (
      <Grid item style={{ fontSize: size, display: 'inline-flex', alignItems: 'center' }} {...rest}>
        <Icon style={{ marginRight: '1rem' }} />{' '}
        <Typography style={{ fontSize: 'inherit' }}>{text}</Typography>
      </Grid>
    );
  };

  return (
    <Grid container direction="column">
      <TaskHeader taskId={taskId} handleClose={handleClose} />
      <DialogContent>
        <TaskPropertyTitle Icon={GrClock} text="Due Date" size="1.6rem" />
        <TextField
          onChange={e => setTitle(e.target.value)}
          fullWidth
          type="datetime-local"
          variant="outlined"
          defaultValue={Date.now()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TaskPropertyTitle Icon={GrTextAlignFull} text="Description" size="1.6rem" />

        {showDescriptionInput ? (
          <TextareaAutosize
            onBlur={() => setShowDescriptionInput(false)}
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={classes.textArea}
            placeholder="Add Comment"
            autoFocus
          />
        ) : (
          <CardActionArea
            onClick={() => setShowDescriptionInput(true)}
            className={classes.textArea}
          >
            {description || 'Add Comment'}
          </CardActionArea>
        )}

        <SubmitCompactActions handleClose={handleClose} />
      </DialogContent>
    </Grid>
  );
};

TaskContent.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskContent;
