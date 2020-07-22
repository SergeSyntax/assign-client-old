import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, makeStyles } from '@material-ui/core';
import { GoPlus } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  sectionActions: {
    padding: '2rem',
  },
  sectionCreateIcon: { display: 'inline', marginRight: '1rem' },
}));

const SectionActions = ({ open, handleOpen }) => {
  const classes = useStyles();

  return (
    !open && (
      <Grid container justify="center" alignItems="center" className={classes.sectionActions}>
        <Button onClick={handleOpen} fullWidth size="small">
          <GoPlus className={classes.sectionCreateIcon} /> Create Task
        </Button>
      </Grid>
    )
  );
};

SectionActions.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default SectionActions;
