import React, { Fragment, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CreateSectionButton from './CreateSectionButton';
import SectionCreatePopover from './SectionCreatePopover';
import { useState } from 'react';
import { Box } from '@material-ui/core';

const SectionCreate = ({ projectId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const savingInProgress = useSelector(state => state.sections.savingInProgress);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!savingInProgress) handleClose(null);
  }, [savingInProgress]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <CreateSectionButton handleClick={handleClick} open={open} />
      <SectionCreatePopover
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        projectId={projectId}
      />
    </Box>
  );
};

SectionCreate.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default SectionCreate;
