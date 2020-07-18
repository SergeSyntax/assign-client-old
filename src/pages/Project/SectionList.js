import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  IconButton,
  CardActionArea,
  Card,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { GoKebabHorizontal } from 'react-icons/go';
import SectionCreate from './SectionCreate/SectionCreate';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { fetchSections } from 'actions/sections';

const useStyles = makeStyles(theme => ({
  createSectionButton: {
    margin: '1rem 0',
    width: '20rem',
    minWidth: '20rem',

    fontSize: '1.6rem',
    backgroundColor: 'hsla(0,0%,100%,.14)',
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'hsla(0,0%,100%,.24)',
      borderColor: '#fff',
    },
    '&:active': {
      backgroundColor: 'hsla(0,0%,100%,.24)',
      borderColor: '#fff',
    },
  },
  section: {
    background: '#EBECF0',
    height: 'inherit',
    width: '20rem',
    minWidth: '20rem',
    margin: '1rem 0',
    '&:not(:last-child)': {
      marginRight: '1rem',
    },
  },
  sectionHeader: {
    padding: '1rem',
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  sectionMenuButton: {
    padding: '.6rem',
    borderRadius: '.6rem',
  },
  sectionMenuButtonIcon: {
    fontSize: '1.4rem',
  },
  sectionActions: {
    padding: '.5rem',
  },
  taskList: {
    maxHeight: '56rem',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      height: '8px',
      width: '8px',
    },
    '&::-webkit-scrollbar-button': {
      display: 'block',
      height: '4px',
      width: '4px',
    },
    '&::-webkit-scrollbar-track-piece': {
      background: 'rgba(9,30,66,.08)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#BFC2CE',
    },
  },
}));

const SectionList = ({ projectId }) => {
  const classes = useStyles();
  const sectionsList = useSelector(state => state.sections.sectionsList);
  const loadingSections = useSelector(state => state.sections.loadingSections);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSections(projectId));
  }, [dispatch]);

  return loadingSections ? (
    <div>loading..</div>
  ) : (
    Object.values(sectionsList).map(section => (
      <Grid
        key={section.id}
        container
        wrap="nowrap"
        direction="column"
        draggable
        className={classes.section}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
          className={classes.sectionHeader}
        >
          <Typography className={classes.sectionTitle}>{`${section.title}`} </Typography>
          <IconButton className={classes.sectionMenuButton} size="small">
            <GoKebabHorizontal className={classes.sectionMenuButtonIcon} />
          </IconButton>
        </Grid>

        <Grid className={classes.taskList}>
          {_.times(4, j => (
            <Card key={j} elevation={4} style={{ margin: '1rem' }}>
              <CardActionArea>
                <CardContent>{`Task ${j + 1}`}</CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>

        <Grid container justify="center" alignItems="center" className={classes.sectionActions}>
          <Button fullWidth size="small">
            + Create Task
          </Button>
        </Grid>
      </Grid>
    ))
  );

  return _.times(3, i => (
    <Grid key={i} container wrap="nowrap" direction="column" draggable className={classes.section}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.sectionHeader}
      >
        <Typography className={classes.sectionTitle}>{`section ${i + 1}`} </Typography>
        <IconButton className={classes.sectionMenuButton} size="small">
          <GoKebabHorizontal className={classes.sectionMenuButtonIcon} />
        </IconButton>
      </Grid>

      <Grid className={classes.taskList}>
        {_.times(i % 2 === 0 ? 1 : 30, j => (
          <Card key={j} elevation={4} style={{ margin: '1rem' }}>
            <CardActionArea>
              <CardContent>{`Task ${j + 1}`}</CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>

      <Grid container justify="center" alignItems="center" className={classes.sectionActions}>
        <Button fullWidth size="small">
          + Create Task
        </Button>
      </Grid>
    </Grid>
  ));
};

SectionList.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default SectionList;
