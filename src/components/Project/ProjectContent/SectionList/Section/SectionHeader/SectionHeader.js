import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SectionMenu from './SectionMenu/SectionMenu';

const useStyles = makeStyles(theme => ({
  sectionHeader: {
    padding: '1rem',
  },
  sectionTitle: {
    fontWeight: 'bold',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  sectionMenuButton: {
    padding: '.6rem',
    borderRadius: '.6rem',
  },
}));

const SectionHeader = ({ sectionId }) => {
  const sectionTitle = useSelector(state => state.sections.sectionList[sectionId].title);

  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      wrap="nowrap"
      className={classes.sectionHeader}
    >
      <Typography className={classes.sectionTitle}>{sectionTitle} </Typography>
      <SectionMenu sectionId={sectionId} />
    </Grid>
  );
};

SectionHeader.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default SectionHeader;
