import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import { makeStyles, Menu } from '@material-ui/core';
import DeleteButton from 'components/shared/MenuItems/DeleteButton';
import { useDispatch } from 'react-redux';
import { deleteSection } from 'actions/sections';
const useStyles = makeStyles(theme => ({
  sectionMenuButtonIcon: {
    fontSize: '1.4rem',
  },
}));
const SectionMenu = ({ sectionId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <MenuIconButton iconClassName={classes.sectionMenuButtonIcon} onClick={openMenu} />
      <Menu
        autoFocus
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <DeleteButton onClick={() => dispatch(deleteSection(sectionId))} />
      </Menu>
    </Fragment>
  );
};

SectionMenu.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default SectionMenu;
