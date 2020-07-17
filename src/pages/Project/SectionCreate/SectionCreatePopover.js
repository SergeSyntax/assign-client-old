import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Card, CardContent, makeStyles } from '@material-ui/core';
import SectionCreateForm from './SectionCreateForm/SectionCreateForm';

const useStyles = makeStyles(theme => ({
  createSectionCard: {
    width: '20rem',
    minWidth: '20rem',
    background: '#EBECF0',
  },
  createSectionMenu: {
    minWidth: 'inherit',
    width: 'inherit',
  },
}));
const SectionCreatePopover = ({ open, anchorEl, handleClose, projectId }) => {
  const classes = useStyles();

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      onClose={handleClose}
      elevation={0}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Card className={classes.createSectionCard} elevation={4}>
        <CardContent>
          <SectionCreateForm projectId={projectId} handleClose={handleClose} />
        </CardContent>
      </Card>
    </Popover>
  );
};

SectionCreatePopover.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default SectionCreatePopover;
