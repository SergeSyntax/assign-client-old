import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, makeStyles } from '@material-ui/core';
import SectionList from './SectionList';
import SectionCreate from './SectionCreate/SectionCreate';

const useStyles = makeStyles(theme => ({
  projectContent: {
    padding: '1rem',
    flex: 1,
    display: 'flex',
  },
  sectionList: {
    flex: 1,
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      height: '12px',
      width: '12px',
    },
    '&::-webkit-scrollbar-track-piece': {
      background: 'rgba(0,0,0,.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(253, 253, 253)',
      borderRadius: '10rem',
    },
  },
}));

const ProjectContent = ({ id }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.projectContent}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        wrap="nowrap"
        className={classes.sectionList}
      >
        <SectionList projectId={id} />
        <SectionCreate projectId={id} />
      </Grid>
    </Container>
  );
};

ProjectContent.propTypes = {};

export default ProjectContent;
