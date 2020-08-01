import React from 'react';
import PropTypes from 'prop-types';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  sectionMenuButtonIcon: {
    fontSize: '1.4rem',
  },
}));

const SectionMenuButton = ({ onClick }) => {
  const classes = useStyles();

  return <MenuIconButton iconClassName={classes.sectionMenuButtonIcon} onClick={onClick} />;
};

SectionMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SectionMenuButton;
