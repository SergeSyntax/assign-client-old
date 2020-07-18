import React, { Fragment, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { fetchSections } from 'actions/sections';
import SectionList from './SectionList';
import ProjectContent from './ProjectContent';

const useStyles = makeStyles(theme => ({
  projectPage: {
    height: '100vh',
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
        <ProjectContent id={id} />
      </Grid>
    </Fragment>
  );
};

export default Project;
