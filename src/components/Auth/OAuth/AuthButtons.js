import React from 'react';
import { FaGithub, FaFacebookF, FaGoogle } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import './AuthButtons.scss';
import { baseURL } from 'config/server';
import { makeStyles } from '@material-ui/core';

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

const useStyles = makeStyles({
  githubButton: {
    '&, &:hover, &:active': {
      padding: '1rem 2rem',
      backgroundColor: '#444',
      color: '#fff',
      textTransform: 'capitalize',

      icon: {
        marginLeft: '-2rem',

        marginRight: '1rem',
        fontSize: '1.4em',
        marginTop: '-0.2rem',
        // font-size: 1.2em;
      },
    },
  },
  googleButton: {
    '&, &:hover, &:active': {
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      color: '#444',
      textTransform: 'capitalize',
      icon: {
        marginRight: '1rem',
        fontSize: '1.4em',
        marginTop: '-0.2rem',

        // font-size: 1.2em;
      },
    },
  },
});

const AuthButtons = () => {
  const classes = useStyles();
  return (
    <div id="auth-buttons">
      {/* <Button
        startIcon={<FaFacebookF className="icon" />}
        variant="contained"
        color="default"
        fullWidth
        className="facebook-button"
        onClick={() => openWindowPopup(`${baseURL}/users/facebook`)}
      >
        Continue with facebook
      </Button> */}
      <Button
        startIcon={<FaGithub className="icon" />}
        variant="contained"
        color="default"
        fullWidth
        className={classes.githubButton}
        onClick={() => openWindowPopup(`${baseURL}/users/github`)}
      >
        Continue with github
      </Button>
      <Button
        startIcon={<FaGoogle className="icon" />}
        variant="contained"
        color="default"
        fullWidth
        className={classes.googleButton}
        onClick={() => openWindowPopup(`${baseURL}/users/google`)}
      >
        Continue with Google
      </Button>
    </div>
  );
};

export default AuthButtons;
