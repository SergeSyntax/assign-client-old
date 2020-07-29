import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DialogContent,
  Grid,
  TextField,
  TextareaAutosize,
  makeStyles,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { GrTextAlignFull, GrClock } from 'react-icons/gr';
import SubmitCompactActions from 'components/shared/layout/SubmitCompactActions';
import TaskHeader from './TaskHeader/TaskHeader';
import TaskDueDateForm from './TaskDueDateForm/TaskDueDateForm';
import TaskPropertyLabel from './TaskPropertyLabel';

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
  const [description, setDescription] = useState();
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);

  const classes = useStyles();



  return (
    <Grid container direction="column">
      <TaskHeader taskId={taskId} handleClose={handleClose} />
      <DialogContent>

        <TaskDueDateForm taskId={taskId} />

        <TaskPropertyLabel Icon={GrTextAlignFull} text="Description" />

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
