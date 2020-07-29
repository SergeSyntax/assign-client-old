import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Grid, makeStyles, TextareaAutosize, CardActionArea } from '@material-ui/core';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { GrTextAlignFull } from 'react-icons/gr';
import TaskPropertyLabel from '../TaskPropertyLabel';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useSelector, useDispatch } from 'react-redux';
import { setTaskDescription } from 'actions/tasks';

const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', alignItems: 'center' },
  titleIcon: { marginRight: '1rem' },
  textAreaInput: {
    resize: 'none',
    display: 'block',
    width: '100%',
    padding: '.6rem',
    fontFamily: 'inherit',
    fontSize: '1.6rem',
    outline: 'none',
    whiteSpace: 'pre-wrap',
    borderRadius: '4px',
    border: '1px solid #cbd4db',

    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
  textArea: {
    width: '100%',
    height: '9.12rem',
    padding: '.6rem',
    fontFamily: 'inherit',
    fontSize: '1.6rem',
    outline: 'none',
    whiteSpace: 'pre-wrap',
    borderRadius: '4px',
    border: '1px solid #cbd4db',
  },
}));

const schema = Joi.object().keys({
  description: Joi.string().max(5000).allow(''),
});

const validate = generateValidation(schema);

const placeholder = 'Add Comment';

const TaskDescriptionForm = ({ taskId }) => {
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const classes = useStyles();
  const description = useSelector(state => state.tasks.taskList[taskId].description);
  const dispatch = useDispatch();

  return (
    <Form
      validate={validate}
      initialValues={{ description: description ? description : '' }}
      onSubmit={values => {
        dispatch(setTaskDescription({ ...values, taskId }));
        setShowDescriptionInput(false);
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
          <Field name="description" initialValue={description ? description : ''}>
            {props => (
              <Fragment>
                <TaskPropertyLabel label={props.input.name} Icon={GrTextAlignFull} />

                <div className={classes.titleWrapper}>
                  {showDescriptionInput ? (
                    <TextareaAutosize
                      {...props.input}
                      rows={4}
                      onBlur={handleSubmit}
                      className={classes.textAreaInput}
                      style={{
                        borderColor: Boolean(props.meta.touched && props.meta.error) && 'red',
                      }}
                      placeholder={placeholder}
                      autoFocus
                    />
                  ) : (
                    <CardActionArea
                      onClick={() => setShowDescriptionInput(true)}
                      className={classes.textArea}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div style={{ display: 'inline-flex' }}>
                        {props.input.value || placeholder}
                      </div>
                    </CardActionArea>
                  )}
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

TaskDescriptionForm.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default TaskDescriptionForm;
