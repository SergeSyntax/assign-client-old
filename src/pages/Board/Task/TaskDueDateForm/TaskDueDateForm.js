import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Grid, makeStyles } from '@material-ui/core';
import TaskTitleInput from '../TaskHeader/TaskTitleForm/TaskTitleInput';
import FieldInput from 'components/shared/Field/FieldInput';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { GrBook, GrClock } from 'react-icons/gr';
import TaskPropertyLabel from '../TaskPropertyLabel';
const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', alignItems: 'center', fontSize: '2rem' },
  titleIcon: { marginRight: '1rem' },
  titleField: {
    '& .MuiInputBase-input': { fontSize: '1.6rem' },
  },
}));

const TaskDueDateForm = props => {
  const classes = useStyles();

  return (
    <Form
      // validate={validate}
      // initialValues={{ title: taskTitle }}
      onSubmit={values => {
        console.log(values);
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
          <Field name="title" onBlur={handleSubmit}>
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
                <ErrorMsg meta={props.meta} style={{ marginLeft: '4rem' }} />
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
