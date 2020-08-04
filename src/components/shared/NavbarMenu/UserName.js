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

const getUserNameAndLetter = (name, email) => {
  if (name && name !== 'unknown') {
    const secondLetter = /\s[a-z]/i.exec(name);
    const firstLetter = name[0];
    const letter = secondLetter ? `${firstLetter}${secondLetter[0][1]}` : firstLetter;
    return { name, letter };
  } else {
    const name = email.split('@')[0];
    const letter = name[0].toUpperCase();

    return { name, letter };
  }
};

const UserName = () => {
  const classes = useStyles();
  const username = useSelector(state => state.users.userInfo.name);
  const email = useSelector(state => state.users.userInfo.email);

  const { name, letter } = getUserNameAndLetter(username, email);

  return (
    <Button className={classes.userButton}>
      <Avatar className={classes.userIcon}>{letter}</Avatar>
      <Typography className={classes.userName}>{name}</Typography>
    </Button>
  );
};

export default UserName;
