import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Grid, makeStyles } from '@material-ui/core';
import TaskTitleInput from '../TaskHeader/TaskTitleForm/TaskTitleInput';
import FieldInput from 'components/shared/Field/FieldInput';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { GrBook, GrClock } from 'react-icons/gr';
import TaskPropertyLabel from '../TaskPropertyLabel';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useSelector, useDispatch } from 'react-redux';
import { setTaskDueDate } from 'actions/tasks';
import formatDate from 'utils/formatDate';
const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', alignItems: 'center', fontSize: '2rem' },
  titleIcon: { marginRight: '1rem' },
  titleField: {
    '& .MuiInputBase-input': { fontSize: '1.6rem' },
  },
}));

const minDate = Date.now();
const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 100));

const schema = Joi.object().keys({
  dueDate: Joi.date().greater(minDate).less(maxDate),
});

const validate = generateValidation(schema);

const TaskDueDateForm = ({ taskId }) => {
  const classes = useStyles();
  const dueDate = useSelector(state => state.tasks.taskList[taskId].dueDate);
  const dispatch = useDispatch();

  return (
    <Form
      validate={validate}
      initialValues={{ dueDate: dueDate ? formatDate(dueDate) : null }}
      onSubmit={values => {
        dispatch(setTaskDueDate({ ...values, taskId }));
      }}
      render={({ handleSubmit }) => (
        <Grid
          item
          component="form"
          className={classes.titleForm}
          autoComplete="off"
          onSubmit={handleSubmit}
          noValidate
        >
          <Field name="dueDate" initialValue={dueDate} onBlur={handleSubmit}>
            {props => (
              <Fragment>
                <TaskPropertyLabel label={props.input.name} Icon={GrClock} text="Due Date" />

                <div className={classes.titleWrapper}>
                  <FieldInput
                    className={classes.titleField}
                    {...props}
                    size="small"
                    type="datetime-local"
                  />
                </div>
                <ErrorMsg meta={props.meta} style={{ marginLeft: '2rem' }} />
              </Fragment>
            )}
          </Field>
        </Grid>
      )}
    />
  );
};

TaskDueDateForm.propTypes = {};

export default TaskDueDateForm;