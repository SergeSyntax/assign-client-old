import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import FieldInput from 'components/shared/Field/FieldInput';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { makeStyles, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', alignItems: 'center', minHeight: '5rem' },
  titleField: {
    '& .MuiInputBase-input': {
      fontSize: '2.3rem',
      fontWeight: 500,
      lineHeight: '3rem',
      letterSpacing: '.1rem',
      padding: '.14rem .9rem',
      fontFamily: 'inherit',
      height: 'none',
    },
  },
  titleText: {
    border: '1px solid transparent',
    fontSize: '2.3rem',
    fontWeight: 500,
    lineHeight: '3rem',
    letterSpacing: '.1rem',
    padding: '1rem 2rem',
    width: '100%',
    borderRadius: '4px',
    fontFamily: 'inherit',
    wordBreak: 'break-word',
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));

const TaskTitleInput = ({ showTitleInput, setShowTitleInput, handleSubmit }) => {
  const classes = useStyles();

  return (
    <Field name="title" onBlur={handleSubmit} onClick={() => setShowTitleInput(true)}>
      {props => (
        <Fragment>
          <div className={classes.titleWrapper}>
            {showTitleInput ? (
              <FieldInput
                className={classes.titleField}
                {...props}
                autoFocus
                multiline
                size="small"
                type="text"
              />
            ) : (
              <Fragment>
                <CardActionArea {...props} className={classes.titleText}>
                  <div>{`${props.input.value}`}</div>
                </CardActionArea>
              </Fragment>
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
