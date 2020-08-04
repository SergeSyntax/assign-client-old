import React from 'react';
import {
  Grid,
  CardContent,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  // title
  taskTitle: { padding: '16px 24px' },
  titleText: { flex: 1, height: '5rem', marginLeft: '3rem' },
  titleIcon: { width: '2rem', height: '2rem', marginLeft: '8rem' },
  // content
  taskContent: { padding: '2rem 4rem' },
  // due date
  taskDueDateFormIcon: { width: '2rem', height: '2rem', marginRight: '1rem' },
  taskDueDateFormLabel: { width: '15rem', height: '4rem' },
  taskDueDateFormContent: {
    height: '3rem',
    maxWidth: '27rem',
    marginLeft: '3rem',
    marginTop: '1rem',
  },
  // description
  taskDescriptionForm: { marginTop: '2.5rem' },
  taskDescriptionFormIcon: { width: '2rem', height: '2rem', marginRight: '1rem' },
  taskDescriptionFormLabel: {
    width: '17rem',
    height: '4rem',
  },
  taskDescriptionFormContent: {
    height: '9.6rem',
    width: '100%',
    marginLeft: '3rem',
    marginTop: '1rem',
  },
  // create comment
  createComment: { marginTop: '2.5rem' },
  createCommentIcon: { width: '2rem', height: '2rem', marginRight: '1rem' },
  createCommentLabel: {
    width: '14rem',
    height: '4rem',
  },
  // comment
  createCommentContent: { height: '6rem', width: '100%', marginLeft: '3rem', marginTop: '1rem' },
  // task actions
  activityListHeader: { flex: 1, height: '40px' },
  activityListIcon: { width: '2rem', height: '2rem' },
  activityListLabel: { flex: 1, height: '40px' },
}));

export const TaskLoadingSkeleton = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid
        className={classes.taskTitle}
        item
        container
        direction="row"
        wrap="nowrap"
        justify="space-between"
        alignItems="center"
      >
        <Skeleton className={classes.titleText} variant="text" />
        <Skeleton className={classes.titleIcon} variant="circle" />
      </Grid>
      <Grid
        component={CardContent}
        className={classes.taskContent}
        container
        direction="row"
        justify="space-between"
      >
        {/* TaskDueDateForm */}
        <Grid item md={7} xs={12}>
          <Grid item container direction="row" wrap="nowrap" alignItems="center">
            <Skeleton className={classes.taskDueDateFormIcon} variant="circle" />{' '}
            <Skeleton className={classes.taskDueDateFormLabel} variant="text" />
          </Grid>
          <Skeleton variant="rect" className={classes.taskDueDateFormContent} />
          {/* TaskDescriptionForm */}
          <Grid
            className={classes.taskDescriptionForm}
            item
            container
            direction="row"
            wrap="nowrap"
            alignItems="center"
          >
            <Skeleton className={classes.taskDescriptionFormIcon} variant="circle" />{' '}
            <Skeleton className={classes.taskDescriptionFormLabel} variant="text" />
          </Grid>
          <Skeleton className={classes.taskDescriptionFormContent} variant="rect" />
          {/* CreateComment */}
          <Grid
            className={classes.createComment}
            item
            container
            direction="row"
            wrap="nowrap"
            alignItems="center"
          >
            <Skeleton className={classes.createCommentIcon} variant="circle" />{' '}
            <Skeleton className={classes.createCommentLabel} variant="text" />
          </Grid>
          <Skeleton className={classes.createCommentContent} variant="rect" />
          {/* ActivityList */}
        </Grid>
        <Grid item md={3} xs={12}>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" id="Task Actions">
                <Skeleton className={classes.activityListHeader} variant="text" />
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <Skeleton className={classes.activityListIcon} variant="circle" />{' '}
              </ListItemIcon>
              <ListItemText>
                <Skeleton className={classes.activityListLabel} variant="text" />
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
