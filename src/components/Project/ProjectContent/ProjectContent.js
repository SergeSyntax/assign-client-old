import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, makeStyles } from '@material-ui/core';
import SectionList from './SectionList/SectionList';
import SectionCreate from './SectionCreate/SectionCreate';
import { useSelector } from 'react-redux';
import SectionListSkeleton from './SectionList/SectionListSkeleton';

const useStyles = makeStyles(theme => ({
  projectContent: {
    padding: '1rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
  },
  sectionList: {
    flex: 1,
    overflowX: 'auto',
    overflowY: 'hidden',

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
  const loadingSections = useSelector(state => state.sections.loadingSections);

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
        {loadingSections ? (
          <SectionListSkeleton />
        ) : (
          <Fragment>
            <SectionList projectId={id} />
            <SectionCreate projectId={id} />
          </Fragment>
        )}
      </Grid>
    </Container>
  );
};

ProjectContent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectContent;
