import React from 'react';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import './AuthButtons.scss';
import { baseURL } from 'config/server';

const openWindowPopup = url => {
  let height = window.innerHeight;
  let width = window.innerWidth;
  let top = 0;
  let left = 0;
  if (width > 620) {
    width = 620;
    left = (window.innerWidth - width) / 2;
  }

  if (height > 740) {
    height = 740;
  }
  return window.open(
    url,
    'DescriptiveWindowName',
    `resizable,scrollbars,status,width=${width},height=${height},top=${top},left=${left}`
  );
};

const AuthButtons = () => {
  return (
    <div id="auth-buttons">
      <Button
        startIcon={<IoLogoGoogle className="google-button__icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="google-button"
        onClick={() => openWindowPopup(`${baseURL}/users/google`)}
      >
        Continue with Google
      </Button>
      {/* <Button
        startIcon={<FaFacebookF className="facebook-button__icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="facebook-button"
        onClick={() => openWindowPopup(`${baseURL}/users/facebook`)}
      >
        Continue with facebook
      </Button> */}
      <Button
        startIcon={<IoLogoGithub className="facebook-button__icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="google-button"
        onClick={() => openWindowPopup(`${baseURL}/users/github`)}
      >
        Continue with github
      </Button>
    </div>
  );
};

export default AuthButtons;
