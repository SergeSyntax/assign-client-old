import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, IconButton, Button, makeStyles, Card } from '@material-ui/core';
import { GoKebabHorizontal, GoPlus } from 'react-icons/go';
import TaskList from './TaskList';

import TaskCreate from './TaskCreate';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  section: {
    background: '#EBECF0',
    maxHeight: '96%',
    flexShrink: '0',
    margin: '1rem 0',
    '&:not(:last-child)': {
      marginRight: '1rem',
    },
  },
  sectionHeader: {
    padding: '1rem',
  },
  sectionTitle: {
    fontWeight: 'bold',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    // width: '100%',
  },
  sectionMenuButton: {
    padding: '.6rem',
    borderRadius: '.6rem',
  },
  sectionMenuButtonIcon: {
    fontSize: '1.4rem',
  },
  sectionActions: {
    padding: '2rem',
  },
  taskList: {
    maxHeight: '95%',
    // maxHeight: '56rem',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      height: '8px',
      width: '8px',
    },
    '&::-webkit-scrollbar-button': {
      display: 'block',
      height: '4px',
      width: '4px',
    },
    '&::-webkit-scrollbar-track-piece': {
      background: 'rgba(9,30,66,.08)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#BFC2CE',
    },
  },
}));

const Section = ({ section }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const savingInProgress = useSelector(state => state.sections.savingInProgress);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!savingInProgress) handleClose(null);
  }, [savingInProgress]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid
      item
      xs={11}
      sm={4}
      md={3}
      lg={2}
      container
      wrap="nowrap"
      direction="column"
      component={Card}
      className={classes.section}
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        className={classes.sectionHeader}
      >
        <Typography className={classes.sectionTitle}>{`${section.title}`} </Typography>
        <IconButton className={classes.sectionMenuButton} size="small">
          <GoKebabHorizontal className={classes.sectionMenuButtonIcon} />
        </IconButton>
      </Grid>

      <Grid container wrap="nowrap" direction="column" className={classes.taskList}>
        <TaskList sectionId={section.id} />
        {open && <TaskCreate sectionId={section.id} handleClose={handleClose} />}
      </Grid>

      {!open && (
        <Grid container justify="center" alignItems="center" className={classes.sectionActions}>
          <Button onClick={handleOpen} fullWidth size="small">
            <GoPlus style={{ display: 'inline', marginRight: '1rem' }} /> Create Task
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

Section.propTypes = { section: PropTypes.object.isRequired };

export default Section;
