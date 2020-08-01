import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Grid, makeStyles } from '@material-ui/core';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useSelector, useDispatch } from 'react-redux';
import TaskTitleInput from './TaskTitleInput';
import { renameTask } from 'actions/tasks';

const useStyles = makeStyles(theme => ({
  titleForm: { width: '100%', display: 'flex', flexDirection: 'column' },
}));

const schema = Joi.object().keys({
  title: Joi.string().min(1).max(255).required(),
});

const validate = generateValidation(schema);

const TaskTitleForm = ({ taskId }) => {
  const classes = useStyles();
  const [showTitleInput, setShowTitleInput] = useState(false);
  const taskTitle = useSelector(state => state.tasks.taskList[taskId]?.title);
  const dispatch = useDispatch();

  const onSubmit = values => {
    if (values.title) {
      dispatch(renameTask({ ...values, taskId }));
      setShowTitleInput(false);
    }
  };

  return (
    <Form
      validate={validate}
      initialValues={{ title: taskTitle }}
      subscription={{ initialValues: true }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Grid
          item
          component="form"
          className={classes.titleForm}
          autoComplete="off"
          onSubmit={handleSubmit}
          noValidate
        >
          <TaskTitleInput
            showTitleInput={showTitleInput}
            setShowTitleInput={setShowTitleInput}
            handleSubmit={handleSubmit}
          />
        </Grid>
      )}
    />
  );
};

TaskTitleForm.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default TaskTitleForm;
