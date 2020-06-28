import React from 'react';
import { Button } from '@material-ui/core';
import Cookies from 'js-cookie';

const Dashboard = () => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          Cookies.remove('assign-auth-token');
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
