import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';

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
      <MenuIconButton
        iconClassName={classes.sectionMenuButtonIcon}
        onClick={() => {
          console.error('not working');
        }}
      />
    </Grid>
  );
};

SectionHeader.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default SectionHeader;
