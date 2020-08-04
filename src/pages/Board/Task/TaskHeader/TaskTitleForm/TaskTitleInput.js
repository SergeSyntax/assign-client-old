import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { GrBook } from 'react-icons/gr';
import FieldInput from 'components/shared/Field/FieldInput';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import { makeStyles, InputAdornment, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  titleWrapper: { display: 'flex', width: '100%', alignItems: 'center', minHeight: '5rem' },
  titleField: {
    '& .MuiInputBase-input': {
      fontSize: '2.3rem',
      fontWeight: 500,
      lineHeight: '3rem',
      letterSpacing: '.1rem',
      padding: '.1rem 0',
      fontFamily: 'inherit',
      height: 'none',
    },
  },
  titleText: {
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
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment style={{ marginLeft: '.8rem' }} position="start">
                //       <GrBook className={classes.titleIcon} />
                //     </InputAdornment>
                //   ),
                // }}
                {...props}
                autoFocus
                multiline
                size="small"
                type="text"
              />
            ) : (
              <Fragment>
                <CardActionArea {...props} className={classes.titleText}>
                  {/* <InputAdornment style={{ marginRight: '.7rem' }} position="start">
                    <GrBook className={classes.titleIcon} style={{ fontSize: '2.3rem' }} />
                  </InputAdornment> */}
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
