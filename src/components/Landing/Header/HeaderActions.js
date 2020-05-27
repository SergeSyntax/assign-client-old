import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './HeaderActions.scss';

const HeaderActions = () => {
  return (
    <div className="landing__header__actions">
      <Button
        variant="contained"
        color="default"
        className="btn btn--primary"
        to="/register"
        component={Link}
      >
        join now
      </Button>
      <Button
        variant="outlined"
        color="default"
        className="btn btn--secondary"
        to="/login"
        component={Link}
      >
        sign in
      </Button>
    </div>
  );
};

export default HeaderActions;
