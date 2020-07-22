import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { createTask } from 'actions/tasks';
import { useDispatch } from 'react-redux';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import FieldInput from 'components/shared/Field/FieldInput';
import SubmitCompactActions from 'components/shared/layout/SubmitCompactActions';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';

const schema = Joi.object().keys({
  title: Joi.string().min(1).max(255).required(),
});

const validate = generateValidation(schema);

const TaskCreateForm = forwardRef(({ sectionId, handleClose, savingInProgress }, ref) => {
  const dispatch = useDispatch();

  return (
    <Form
      validate={validate}
      onSubmit={values => {
        dispatch(createTask({ ...values, sectionId }));
      }}
      render={({ handleSubmit }) => (
        <form ref={ref} autoComplete="off" onSubmit={handleSubmit} noValidate>
          <Field name="title">
            {({ input, meta }) => (
              <Fragment>
                <FieldInput
                  fullWidth
                  multiline
                  autoFocus
                  input={input}
                  meta={meta}
                  name="title"
                  type="text"
                  variant="standard"
                  label="Task's Title"
                />
                <ErrorMsg meta={meta} />
              </Fragment>
            )}
          </Field>
          <SubmitCompactActions handleClose={handleClose} savingInProgress={savingInProgress} />
        </form>
      )}
    />
  );
});

TaskCreateForm.propTypes = {
  sectionId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default TaskCreateForm;
