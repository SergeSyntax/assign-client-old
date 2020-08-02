import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import {
  Grid,
  makeStyles,
  TextareaAutosize,
  CardActionArea,
  Card,
  Button,
} from '@material-ui/core';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { GrTextAlignFull, GrTextAlignLeft } from 'react-icons/gr';
import TaskPropertyLabel from '../TaskPropertyLabel';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useSelector, useDispatch } from 'react-redux';
import SubmitButton from 'components/shared/Buttons/SubmitButton';

const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', flexDirection: 'column', padding: '1rem' },
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
    resize: 'none',
    outline: 'none',
  },
  textArea: {
    width: '100%',
    padding: '1rem',
    // lineHeight: 'inherit',
    // letterSpacing: 'inherit',
    // fontFamily: 'inherit',
    fontSize: '1.4rem',
    borderRadius: '4px',
    // minHeight: '4rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    wordBreak: 'break-word',
    cursor: 'pointer',
  },
  textAreaContent: { display: 'inline-flex' },
}));

const schema = Joi.object().keys({
  message: Joi.string().min(1).max(5000).required(),
});

const validate = generateValidation(schema);

const placeholder = 'Write a comment...';

const TaskActivity = ({ taskId }) => {
  const [showActivityInput, setShowActivityInput] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Form
      validate={validate}
      onSubmit={values => {
        // dispatch(createComment({ ...values, taskId }));
      }}
      render={({ handleSubmit, submitting }) => (
        <Grid
          item
          component="form"
          className={classes.titleForm}
          autoComplete="off"
          onSubmit={handleSubmit}
          noValidate
        >
          <Field name="message">
            {props => (
              <Fragment>
                <TaskPropertyLabel label={props.input.name} Icon={GrTextAlignLeft} />
                {showActivityInput ? (
                  <Card
                    className={classes.titleWrapper}
                    onBlur={() => {
                      if (props.input.value.length === 0) setShowActivityInput(false);
                    }}
                  >
                    <TextareaAutosize
                      {...props.input}
                      className={classes.textAreaInput}
                      style={{
                        borderColor: Boolean(props.meta.touched && props.meta.error) && 'red',
                      }}
                      placeholder={placeholder}
                      autoFocus
                    />
                    <div style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}>
                      <SubmitButton
                        color="primary"
                        variant="contained"
                        text="Comment"
                        inProgress={false}
                      />
                      <ErrorMsg meta={props.meta} style={{ marginLeft: '2rem' }} />
                    </div>
                  </Card>
                ) : (
                  <Card>
                    <CardActionArea
                      onClick={() => setShowActivityInput(true)}
                      className={classes.textArea}
                    >
                      <div className={classes.textAreaContent}>
                        {props?.input?.value || placeholder}
                      </div>
                    </CardActionArea>
                  </Card>
                )}
              </Fragment>
            )}
          </Field>
        </Grid>
      )}
    />
  );
};

TaskActivity.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default TaskActivity;
