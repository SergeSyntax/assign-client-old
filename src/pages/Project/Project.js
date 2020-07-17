import React, { Fragment } from 'react';
import ProjectBackground from './ProjectBackground';
import {
  Grid,
  makeStyles,
  Card,
  IconButton,
  Typography,
  CardActionArea,
  CardContent,
  Button,
  Container,
} from '@material-ui/core';
import './Project.scss';
import _ from 'lodash';

import ProjectNavbar from './ProjectNavbar';
import { GoKebabHorizontal } from 'react-icons/go';
import SectionCreate from './SectionCreate/SectionCreate';

const useStyles = makeStyles(theme => ({
  projectPage: {
    height: '100vh',
  },
  projectContent: {
    padding: '1rem',
    flex: 1,
    display: 'flex',
  },
  sectionList: {
    flex: 1,
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      height: '12px',
      width: '12px',
    },
    '&::-webkit-scrollbar-track-piece': {
      background: 'rgba(0,0,0,.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(253, 253, 253)',
      borderRadius: '10rem',
    },
  },
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

const Project = ({
  match: {
    params: { id },
  },
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <ProjectBackground />
      <Grid direction="column" wrap="nowrap" className={classes.projectPage} container>
        <ProjectNavbar projectId={id} />
        <Container maxWidth={false} className={classes.projectContent}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            wrap="nowrap"
            className={classes.sectionList}
          >
            {_.times(3, i => (
              <Grid
                key={i}
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

                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  className={classes.sectionActions}
                >
                  <Button fullWidth size="small">
                    + Create Task
                  </Button>
                </Grid>
              </Grid>
            ))}
            <SectionCreate projectId={id} />
          </Grid>
        </Container>
      </Grid>
    </Fragment>
  );
};

export default Project;
