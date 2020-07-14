import React from 'react';
import { makeStyles, Button, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const useStyle = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.error.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -6,
    marginLeft: -12,
  },
  button: { marginTop: '1rem', textTransform: 'capitalize' },
}));

const ProjectDeleteFormButton = ({ disabled }) => {
  const classes = useStyle();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);
  return (
    <div className={classes.wrapper}>
      <Button
        disabled={savingInProgress || disabled}
        className={classes.button}
        fullWidth
        size="small"
        color="secondary"
        variant="contained"
        type="submit"
      >
        I understand the consequences, delete this project
      </Button>
      {savingInProgress && <CircularProgress size={25} className={classes.buttonProgress} />}
    </div>
  );
};

ProjectDeleteFormButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default ProjectDeleteFormButton;
