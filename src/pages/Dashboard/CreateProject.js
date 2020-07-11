import React, { Fragment, useState, useEffect } from 'react';
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  DialogActions,
  Button,
  makeStyles,
} from '@material-ui/core';
import { FiFolderPlus } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { createProject } from 'actions/projects';
import { Form, Field } from 'react-final-form';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import Label from 'components/Auth/Form/Field/Label/Label';
import FieldInput from 'components/Auth/Form/Field/FieldInput';
import ErrorMsg from 'components/Auth/Form/Field/ErrorMsg';
import { GoTag } from 'react-icons/go';
import SubmitProject from './SubmitProject';

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '30rem',
  },
}));

const schema = Joi.object().keys({
  title: Joi.string().min(1).max(255).required(),
  accessibility: Joi.boolean().required(),
});

const validate = generateValidation(schema);

const CreateProject = () => {
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);
  const createInProgress = useSelector(state => state.projects.createInProgress);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (createInProgress) setSubmitStatus(true);
    else if (!createInProgress && submitStatus) handleClose();
  }, [createInProgress, submitStatus]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const classes = useStyle();
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(createProject(values));
    setSubmitStatus(true);
  };

  return (
    <Fragment>
      <IconButton onClick={handleClickOpen} color="primary">
        <FiFolderPlus />
      </IconButton>{' '}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new project</DialogTitle>

        <DialogContent>
          <Form
            validate={validate}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
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
                      <Select
                        error={meta.error && meta.touched}
                        fullWidth
                        variant="outlined"
                        {...input}
                      >
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
                  <SubmitProject createInProgress={createInProgress} />
                </DialogActions>
              </form>
            )}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateProject;
