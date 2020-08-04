import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar,
  Typography,
  makeStyles,
  Card,
  CardHeader,
  IconButton,
  CardContent,
} from '@material-ui/core';
import { formatDatePrettyPrint } from 'utils/formatDate';
import { useSelector } from 'react-redux';
import { blue } from '@material-ui/core/colors';
import { GoKebabVertical } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem',
    width: '100%',
    marginLeft: '2.65rem',
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
  avatar: {
    backgroundColor: blue[800],
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
    <Card className={classes.root} elevation={3}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {letter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <GoKebabVertical style={{ fontSize: '1.6rem' }} />
          </IconButton>
        }
        title={name}
        subheader={formatDatePrettyPrint(comment.createdAt)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {comment.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

CommentItem.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default CommentItem;
