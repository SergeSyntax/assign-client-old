import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import './AuthButtons.scss';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Button
        startIcon={<IoLogoGoogle className="google-button__icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="google-button"
      >
        Continue with Google
      </Button>
      <Button
        startIcon={<FaFacebookF className="facebook-button__icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="facebook-button"
      >
        Continue with facebook
      </Button>
    </div>
  );
};

export default AuthButtons;
