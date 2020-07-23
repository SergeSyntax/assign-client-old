import React from 'react';
import PropTypes from 'prop-types';

import SubmitButton from 'components/shared/Buttons/SubmitButton';
import { useSelector } from 'react-redux';

const UserSubmitButton = ({ submitting, value }) => {
  const savingInProgress = useSelector(state => state.users.savingInProgress);
  return (
    <SubmitButton
      inProgress={savingInProgress}
      variant="contained"
      color="primary"
      text={value}
      fullWidth
      style={{ backgroundColor: '#0073b1', padding: '1rem 2rem', marginTop: '.9rem' }}
    />
  );
};

UserSubmitButton.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default UserSubmitButton;
