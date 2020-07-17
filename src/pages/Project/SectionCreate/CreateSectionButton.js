import React from 'react';
import PropTypes from 'prop-types';
import { Fade, Button, makeStyles } from '@material-ui/core';
import { forwardRef } from 'react';

const useStyles = makeStyles(theme => ({
  createSectionButton: {
    margin: '1rem 0',
    width: '20rem',
    minWidth: '20rem',

    fontSize: '1.6rem',
    backgroundColor: 'hsla(0,0%,100%,.14)',
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'hsla(0,0%,100%,.24)',
      borderColor: '#fff',
    },
    '&:active': {
      backgroundColor: 'hsla(0,0%,100%,.24)',
      borderColor: '#fff',
    },
  },
}));

const CreateSectionButton = forwardRef(({ open, handleClick }, ref) => {
  const classes = useStyles();

  return (
    <Fade in={!open}>
      <Button
        innerRef={ref}
        onClick={handleClick}
        variant="contained"
        className={classes.createSectionButton}
      >
        create section
      </Button>
    </Fade>
  );
});

CreateSectionButton.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CreateSectionButton;
