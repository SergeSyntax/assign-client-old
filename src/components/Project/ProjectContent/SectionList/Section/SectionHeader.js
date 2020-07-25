import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, IconButton, makeStyles } from '@material-ui/core';
import { GoKebabHorizontal } from 'react-icons/go';
import { useSelector } from 'react-redux';

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
  sectionMenuButtonIcon: {
    fontSize: '1.4rem',
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
      <IconButton className={classes.sectionMenuButton} size="small">
        <GoKebabHorizontal className={classes.sectionMenuButtonIcon} />
      </IconButton>
    </Grid>
  );
};

SectionHeader.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default SectionHeader;
