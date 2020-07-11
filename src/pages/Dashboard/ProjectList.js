import React, { useEffect, Fragment } from 'react';
import {
  Grid,
  CardHeader,
  IconButton,
  Card,
  CardActionArea,
  makeStyles,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import { GoKebabVertical, GoPencil, GoX } from 'react-icons/go';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchProjects } from 'actions/projects';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '10rem',
    borderBottomLeftRadius: '10rem',
    padding: '1rem',
  },

  loading: {
    // margin: '0 auto',
    height: '10rem',
    margin: '8px',
  },
  dropDownMenuButton: {
    color: '#fff',
    fontSize: '3rem',
    padding: theme.spacing(1),
  },
}));

const ProjectList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projectList, shallowEqual);
  const loadingProjects = useSelector(state => state.projects.loadingProjects);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <Grid item container direction="column" spacing={2}>
      {loadingProjects ? (
        <Fragment>
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
        </Fragment>
      ) : (
        <Fragment>
          {' '}
          {Object.values(projects).map(project => (
            <Grid item key={project.id}>
              <Card className={classes.root}>
                <CardActionArea component={Link} to={`/project/${project.id}`}>
                  <CardHeader
                    title={project.title}
                    subheader={project.accessibility ? 'public' : 'private'}
                  />
                </CardActionArea>
                <div className={classes.menu}>
                  <IconButton onClick={handleClick}>
                    <GoKebabVertical />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      <ListItemIcon style={{ width: '3rem' }}>
                        <GoPencil />
                      </ListItemIcon>{' '}
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      <ListItemIcon style={{ width: '3rem' }}>
                        <GoX />
                      </ListItemIcon>{' '}
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              </Card>
            </Grid>
          ))}
        </Fragment>
      )}
    </Grid>
  );
};

export default ProjectList;
