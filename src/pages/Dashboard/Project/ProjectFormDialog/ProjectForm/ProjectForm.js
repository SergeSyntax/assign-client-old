import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import TitleInput from './ProjectInputs/TitleInput';
import AccessibilitySelect from './ProjectInputs/AccessibilitySelect';
import ProjectFormActions from './ProjectFormActions/ProjectFormActions';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { makeStyles } from '@material-ui/core';

const schema = Joi.object().keys({
  title: Joi.string().min(1).max(255).required(),
  accessibility: Joi.boolean().required(),
});

const validate = generateValidation(schema);

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '30rem',
  },
}));

const ProjectForm = ({
  onSubmit,
  handleClose,
  initialValues = {},
  submitLabel,
  savingInProgress,
}) => {
  const classes = useStyles();

  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form autoComplete="off" className={classes.container} onSubmit={handleSubmit} noValidate>
          <TitleInput />
          <AccessibilitySelect />
          <ProjectFormActions
            submitLabel={submitLabel}
            handleClose={handleClose}
            savingInProgress={savingInProgress}
          />
        </form>
      )}
    />
  );
};

ProjectForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  submitLabel: PropTypes.string.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default ProjectForm;
