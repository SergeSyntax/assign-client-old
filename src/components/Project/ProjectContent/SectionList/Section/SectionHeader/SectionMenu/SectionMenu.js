import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import { makeStyles, Menu } from '@material-ui/core';
import DeleteButton from 'components/shared/MenuItems/DeleteButton';
import { useDispatch } from 'react-redux';
import { deleteSection } from 'actions/sections';
import usePopup from 'hooks/usePopup';
const useStyles = makeStyles(theme => ({
  sectionMenuButtonIcon: {
    fontSize: '1.4rem',
  },
}));
const SectionMenu = ({ sectionId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Menu state
  const [menu, setMenuEle] = usePopup();

  return (
    <Fragment>
      <MenuIconButton
        iconClassName={classes.sectionMenuButtonIcon}
        onClick={event => setMenuEle(event.currentTarget)}
      />
      <Menu
        anchorEl={menu.anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={menu.open}
        onClose={() => setMenuEle(null)}
        autoFocus
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
