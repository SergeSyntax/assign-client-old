import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Grid, TextField, Typography, makeStyles } from '@material-ui/core';
import { GrBook } from 'react-icons/gr';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import CancelIconButton from 'components/shared/Buttons/CancelIconButton';
import { useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import FieldInput from 'components/shared/Field/FieldInput';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';

const TaskHeader = ({ taskId, handleClose }) => {
  const taskTitle = useSelector(state => state.tasks.taskList[taskId].title);
  const [showTitleInput, setShowTitleInput] = useState(false);
  const onSubmit = values => {
    if (values.title) setShowTitleInput(false);
  };

  const schema = Joi.object().keys({
    title: Joi.string().min(1).max(255).required(),
  });

  const validate = generateValidation(schema);
  const useStyles = makeStyles(theme => ({
    titleForm: { width: '100%', display: 'flex', flexDirection: 'column' },
    titleWrapper: { display: 'flex', width: '100%', alignItems: 'center' },
    titleIcon: { marginRight: '1rem' },
    titleField: {
      '& .MuiInputBase-input': { fontSize: '2rem' },
    },
    titleText: {
      fontSize: '2rem',
      width: '100%',
      padding: '.57rem 1.15rem',
    },
    taskOptions: { marginLeft: '1rem', display: 'inline-flex' },
  }));

  const ShowText = props => {
    return <Typography {...props}>{`${props.input.value}`}</Typography>;
  };

  const classes = useStyles();
  return (
    <DialogTitle>
      <Grid container justify="space-between" alignItems="flex-start" wrap="nowrap">
        <Form
          validate={validate}
          initialValues={{ title: taskTitle }}
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
              <Field name="title" onBlur={handleSubmit} onClick={() => setShowTitleInput(true)}>
                {props => (
                  <Fragment>
                    <div className={classes.titleWrapper}>
                      <GrBook className={classes.titleIcon} />{' '}
                      {showTitleInput ? (
                        <FieldInput
                          className={classes.titleField}
                          {...props}
                          autoFocus
                          size="small"
                          type="text"
                        />
                      ) : (
                        <ShowText {...props} className={classes.titleText} value={'text'} />
                      )}
                    </div>
                    <ErrorMsg meta={props.meta} style={{ marginLeft: '4rem' }} />
                  </Fragment>
                )}
              </Field>
            </Grid>
          )}
        />
        <Grid item className={classes.taskOptions}>
          <MenuIconButton
            style={{ marginRight: '1rem' }}
            onClick={() => {
              console.log('not working');
            }}
          />
          <CancelIconButton onClick={handleClose} />
        </Grid>
      </Grid>
    </DialogTitle>
  );
};

TaskHeader.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskHeader;
