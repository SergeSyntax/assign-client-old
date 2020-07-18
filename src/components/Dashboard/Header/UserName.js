import React from 'react';
import { Button, Avatar, Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  userIcon: {
    color: theme.palette.primary.main,
    backgroundColor: '#fff',
    fontSize: '1.6rem',
  },
  userName: {
    marginLeft: '.5rem',
    textTransform: 'capitalize',
    fontWeight: 500,
    color: '#fff',
  },
  userButton: {
    borderRadius: 100,
  },
}));

const UserName = () => {
  const classes = useStyles();
  const user = useSelector(state => state.users.userInfo.name);
  const userLetter = user.match(/[A-Z]/g);

  console.log(userLetter);
  return (
    <Button className={classes.userButton}>
      <Avatar className={classes.userIcon}>SK</Avatar>
      <Typography className={classes.userName}>{user}</Typography>
    </Button>
  );
};

export default UserName;
