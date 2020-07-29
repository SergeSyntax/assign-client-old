import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import TaskTitleInput from '../TaskHeader/TaskTitleForm/TaskTitleInput';
import FieldInput from 'components/shared/Field/FieldInput';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { GrBook, GrClock, GrTextAlignFull } from 'react-icons/gr';
import TaskPropertyLabel from '../TaskPropertyLabel';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useSelector, useDispatch } from 'react-redux';
// import { setTaskDescription } from 'actions/tasks';

const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', alignItems: 'center' },
  titleIcon: { marginRight: '1rem' },
  textArea: {
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
      borderWidth: '.2rem',
    },
  },
}));

const schema = Joi.object().keys({
  description: Joi.string().max(5000).allow(''),
});

const validate = generateValidation(schema);

const TaskDescriptionForm = ({ taskId }) => {
  const classes = useStyles();
  const description = useSelector(state => state.tasks.taskList[taskId].description);
  const dispatch = useDispatch();

  return (
    <Form
      validate={validate}
      initialValues={{ description: description ? description : '' }}
      onSubmit={values => {
        console.log(values);
        // dispatch(setTaskDescription({ ...values, taskId }));
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
          <Field
            name="description"
            initialValue={description ? description : ''}
            onBlur={handleSubmit}
          >
            {props => (
              <Fragment>
                <TaskPropertyLabel label={props.input.name} Icon={GrTextAlignFull} />

                <div className={classes.titleWrapper}>
                  <TextareaAutosize
                    {...props.input}
                    rows={4}
                    // onBlur={() => setShowDescriptionInput(false)}
                    // value={description}
                    // onChange={e => setDescription(e.target.value)}
                    className={classes.textArea}
                    placeholder="Add Comment"
                    autoFocus
                  />
                  {/* <FieldInput
                    className={classes.titleField}
                    {...props}
                    size="small"
                    type="text"
                    multiline
                    // rows={4}
                    rows={4}
                    rowsMax={10}
                  /> */}
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

TaskDescriptionForm.propTypes = {};

export default TaskDescriptionForm;
