import React from 'react';
import { makeStyles, Button, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// const useStyles = makeStyles(theme => ({
//   wrapper: {
//     position: 'relative',
//   },
//   buttonProgress: {
//     color: theme.palette.error.main,
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     marginTop: -6,
//     marginLeft: -12,
//   },
// }));

const useStyles = makeStyles(theme => ({
  button: { marginTop: '1rem', textTransform: 'capitalize' },
  wrapper: {
    position: 'relative',
    // display: 'inline-block',
  },
  buttonWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -39%)',
  },
  buttonProgress: {
    color: theme.palette.error.main,
  },
}));

const ProjectDeleteFormButton = ({ disabled }) => {
  const classes = useStyles();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);
  return (
    // <div className={classes.wrapper}>
    //   <Button
    //     className={classes.button}
    //     fullWidth
    //     size="small"
    //     color="secondary"
    //     variant="contained"

    //   >

    //   </Button>
    //   {savingInProgress && <CircularProgress size={25} className={classes.buttonProgress} />}
    // </div>

    <div className={classes.wrapper}>
      <Button
        className={classes.button}
        type="submit"
        disabled={savingInProgress || disabled}
        fullWidth
        size="small"
        color="secondary"
        variant="contained"
      >
        <div style={{ visibility: savingInProgress ? 'hidden' : 'visible' }}>
          I understand the consequences, delete this project
        </div>
        {savingInProgress && (
          <span className={classes.buttonWrapper}>
            <CircularProgress size={24} className={classes.buttonProgress} />
          </span>
        )}
      </Button>
    </div>
  );
};

ProjectDeleteFormButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default ProjectDeleteFormButton;
