import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CreateSectionButton from './CreateSectionButton';
import SectionCreatePopover from './SectionCreatePopover/SectionCreatePopover';
import { useState } from 'react';
import { Grid } from '@material-ui/core';

const SectionCreate = ({ projectId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const savingInProgress = useSelector(state => state.sections.savingInProgress);
  const ref = useRef();

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!savingInProgress) handleClose(null);
  }, [savingInProgress]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    ref.current.scrollIntoView();
  };

  const open = Boolean(anchorEl);

  return (
    <Grid item xs={11} sm={4} md={3} lg={2}>
      <CreateSectionButton ref={ref} handleClick={handleClick} open={open} />
      <SectionCreatePopover
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        projectId={projectId}
        savingInProgress={savingInProgress}
      />
    </Grid>
  );
};

SectionCreate.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default SectionCreate;
