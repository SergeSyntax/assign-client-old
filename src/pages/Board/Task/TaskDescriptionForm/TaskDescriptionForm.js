import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Grid, makeStyles, TextareaAutosize, CardActionArea, Card } from '@material-ui/core';
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
    width: '100%',
    padding: '1rem',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    fontFamily: 'inherit',
    border: 'none',
    fontSize: '1.4rem',
    borderRadius: '4px',
    minHeight: '8rem',
    resize: 'none',
    '&:focus': {
      outlineColor: theme.palette.primary.main,
    },
  },
  textArea: {
    width: '100%',
    padding: '1rem',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    fontFamily: 'inherit',
    fontSize: '1.4rem',
    borderRadius: '4px',
    minHeight: '8rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textAreaContent: { display: 'inline-flex' },
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
      initialValues={{ description: description ?? '' }}
      subscription={{ initialValues: true }}
      onSubmit={values => {
        values.description = values.description ?? '';
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
                    >
                      <div className={classes.textAreaContent}>
                        {props?.input?.value || placeholder}
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
