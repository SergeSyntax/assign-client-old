import React, { Fragment } from 'react';

import { Form, Field } from 'react-final-form';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useDispatch } from 'react-redux';
import Label from 'components/Auth/Form/Field/Label/Label';
import ErrorMsg from 'components/Auth/Form/Field/ErrorMsg';
import FieldInput from 'components/Auth/Form/Field/FieldInput';
import { MenuItem, DialogActions, Button, makeStyles, Select } from '@material-ui/core';
import { GoTag } from 'react-icons/go';
import { createProject } from 'actions/projects';

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

const ProjectForm = ({ handleClose }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(createProject(values));
    handleClose();
  };

  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form className={classes.container} onSubmit={handleSubmit} noValidate>
          <Field name="title">
            {({ input, meta }) => (
              <Fragment>
                <Label name={input.name} icon={GoTag} />
                <FieldInput
                  input={input}
                  meta={meta}
                  type="text"
                  placeholder="i.e. SkyNet Project"
                />
                <ErrorMsg meta={meta} />
              </Fragment>
            )}
          </Field>
          <Field name="accessibility">
            {({ input, meta }) => (
              <Fragment>
                <Label name={input.name} icon={GoTag} />
                <Select error={meta.error && meta.touched} fullWidth variant="outlined" {...input}>
                  <MenuItem value={false}>Private</MenuItem>
                  <MenuItem value={true}>Public</MenuItem>
                </Select>
                <ErrorMsg meta={meta} />
              </Fragment>
            )}
          </Field>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </form>
      )}
    />
  );
};

export default ProjectForm;
