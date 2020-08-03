import React, { Fragment, useState, useEffect } from 'react';
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
import { createComment } from 'actions/comments';

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
  message: Joi.string().min(1).max(2000).required(),
});

const validate = generateValidation(schema);

const placeholder = 'Write a comment...';

const CreateComment = ({ taskId }) => {
  const savingInProgress = useSelector(state => state.comments.savingInProgress);
  const [showActivityInput, setShowActivityInput] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!savingInProgress) setShowActivityInput(false);
  }, [savingInProgress]);

  return (
    <Fragment>
      <TaskPropertyLabel
        onClick={() => setShowActivityInput(true)}
        label={'Activity'}
        Icon={GrTextAlignLeft}
      />
      {showActivityInput ? (
        <Form
          validate={validate}
          onSubmit={values => {
            dispatch(createComment({ ...values, taskId }));
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
              <Field name="message">
                {props => (
                  <Fragment>
                    <Card
                      className={classes.titleWrapper}
                      style={{ marginLeft: '2.65rem' }}
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
                          inProgress={savingInProgress}
                        />
                        <ErrorMsg meta={props.meta} style={{ marginLeft: '2rem' }} />
                      </div>
                    </Card>
                  </Fragment>
                )}
              </Field>
            </Grid>
          )}
        />
      ) : (
        <Card style={{ marginLeft: '2.65rem', width: '100%' }}>
          <CardActionArea onClick={() => setShowActivityInput(true)} className={classes.textArea}>
            <div className={classes.textAreaContent}>{placeholder}</div>
          </CardActionArea>
        </Card>
      )}
    </Fragment>
  );
};

CreateComment.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default CreateComment;
