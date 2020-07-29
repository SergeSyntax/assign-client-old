import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { GrBook } from 'react-icons/gr';
import FieldInput from 'components/shared/Field/FieldInput';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { makeStyles } from '@material-ui/core';
import { TaskTitleText } from './TaskTitleText';

const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', alignItems: 'center' },
  titleIcon: { marginRight: '1rem' },
  titleField: {
    '& .MuiInputBase-input': { fontSize: '2rem' },
  },
  titleText: {
    fontSize: '2rem',
    width: '100%',
    padding: '.57rem 1.15rem',
    wordBreak: 'break-word',
  },
}));

const TaskTitleInput = ({ showTitleInput, setShowTitleInput, handleSubmit }) => {
  const classes = useStyles();

  return (
    <Field name="title" onBlur={handleSubmit} onClick={() => setShowTitleInput(true)}>
      {props => (
        <Fragment>
          <div className={classes.titleWrapper}>
            <GrBook className={classes.titleIcon} />
            {showTitleInput ? (
              <FieldInput
                className={classes.titleField}
                {...props}
                autoFocus
                size="small"
                type="text"
              />
            ) : (
              <TaskTitleText {...props} className={classes.titleText} />
            )}
          </div>
          <ErrorMsg meta={props.meta} style={{ marginLeft: '4rem' }} />
        </Fragment>
      )}
    </Field>
  );
};

TaskTitleInput.propTypes = {
  showTitleInput: PropTypes.bool.isRequired,
  setShowTitleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default TaskTitleInput;
