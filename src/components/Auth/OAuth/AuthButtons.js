import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import './AuthButtons.scss';

const AuthButtons = () => {
  return (
    <div id="auth-buttons">
      <Button
        startIcon={<IoLogoGoogle className="google-button__icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="google-button"
        component="a"
        href={`${process.env.REACT_APP_BASEURL}/users/google`}
      >
        Continue with Google
      </Button>
      <Button
        startIcon={<FaFacebookF className="facebook-button__icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="facebook-button"
        component="a"
        href={`${process.env.REACT_APP_BASEURL}/users/facebook`}
      >
        Continue with facebook
      </Button>
    </div>
  );
};

export default AuthButtons;
