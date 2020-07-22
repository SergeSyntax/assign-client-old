import React from 'react';
import PropTypes from 'prop-types';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useDispatch } from 'react-redux';
import { createSection } from 'actions/sections';
import InputTitleSmall from './InputTitleSmall';
import SubmitCompactActions from '../../../../../shared/layout/SubmitCompactActions';
import { Form } from 'react-final-form';

const schema = Joi.object().keys({
  title: Joi.string().min(1).max(255).required(),
});

const validate = generateValidation(schema);

const SectionCreateForm = ({ handleClose, projectId, savingInProgress }) => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(createSection({ ...values, projectId }));
  };

  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form autoComplete="off" onSubmit={handleSubmit} noValidate>
          <InputTitleSmall />
          <SubmitCompactActions handleClose={handleClose} savingInProgress={savingInProgress} />
        </form>
      )}
    />
  );
};

SectionCreateForm.propTypes = {
  projectId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default SectionCreateForm;
