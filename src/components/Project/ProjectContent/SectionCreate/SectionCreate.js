import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import CreateSectionButton from './CreateSectionButton';
import SectionCreatePopover from './SectionCreatePopover/SectionCreatePopover';
import { Grid } from '@material-ui/core';
import usePopup from 'hooks/usePopup';

const SectionCreate = ({ projectId }) => {
  const [popup, setPopupEle] = usePopup(state => state.sections.savingInProgress);
  const ref = useRef();

  const openMenu = event => {
    setPopupEle(event.currentTarget);
    ref.current.scrollIntoView();
  };

  return (
    <Grid item xs={11} sm={4} md={3} lg={2}>
      <CreateSectionButton ref={ref} handleClick={openMenu} open={menu.open} />
      <SectionCreatePopover
        open={popup.open}
        anchorEl={popup.anchorEl}
        handleClose={() => setPopupEle(null)}
        projectId={projectId}
      />
    </Grid>
  );
};

SectionCreate.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default SectionCreate;
