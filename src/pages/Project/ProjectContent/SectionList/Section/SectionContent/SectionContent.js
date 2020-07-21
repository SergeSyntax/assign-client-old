import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import TaskList from './TaskList';
import TaskCreate from './TaskCreate/TaskCreate';
import { useSelector } from 'react-redux';
import SectionActions from './SectionActions';

const useStyles = makeStyles(theme => ({
  taskList: {
    maxHeight: '95%',
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

const SectionContent = ({ section }) => {
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
    <Fragment>
      <Grid container wrap="nowrap" direction="column" className={classes.taskList}>
        <TaskList sectionId={section.id} />
        {open && <TaskCreate sectionId={section.id} handleClose={handleClose} />}
      </Grid>

      <SectionActions open={open} handleOpen={handleOpen} />
    </Fragment>
  );
};

SectionContent.propTypes = {
  section: PropTypes.object.isRequired,
};

export default SectionContent;
