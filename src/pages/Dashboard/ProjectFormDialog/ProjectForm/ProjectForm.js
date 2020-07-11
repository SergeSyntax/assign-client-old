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

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '30rem',
  },
}));

const ProjectForm = ({ onSubmit, handleClose, savingInProgress, initialValues = {} }) => {
  const classes = useStyle();

  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form autoComplete="off" className={classes.container} onSubmit={handleSubmit} noValidate>
          <TitleInput />
          <AccessibilitySelect />
          <ProjectFormActions handleClose={handleClose} savingInProgress={savingInProgress} />
        </form>
      )}
    />
  );
};

ProjectForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
  initialValues: PropTypes.object,
};

export default ProjectForm;
