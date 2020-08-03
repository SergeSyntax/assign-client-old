import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
  Divider,
} from '@material-ui/core';
import { formatDatePrettyPrint } from 'utils/formatDate';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1rem',
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  userIcon: {
    color: theme.palette.primary.main,
    backgroundColor: '#EAECF0',
    fontSize: '1.6rem',
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

const CommentItem = ({ commentId }) => {
  const comment = useSelector(state => state.comments.commentList[commentId]);
  const { name, letter } = getUserNameAndLetter(comment.Author.name, comment.Author.email);
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.userIcon}>{letter}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={formatDatePrettyPrint(comment.createdAt)} />
      </ListItem>
    </List>
  );
};

CommentItem.propTypes = {};

export default CommentItem;
