import React, { Fragment, useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import CreateProject from './CreateProject/CreateProject';
import ProjectList from './ProjectList/ProjectList';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
  },
  gridRoot: {
    flex: 1,
  },
  projectHeader: {
    padding: theme.spacing(2),
    paddingLeft: 0,
  },
  projectTitle: {
    fontWeight: 500,
    fontSize: '2rem',
    textTransform: 'capitalize',
  },
  titleIcon: {
    marginRight: '1rem',
    fontSize: '2.3rem',
    color: props => (props ? theme.palette.primary.main : theme.palette.grey[400]),
  },
}));

const Projects = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const classes = useStyles(active);

  return (
    <Fragment>
      <Grid
        className={classes.projectHeader}
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography className={classes.projectTitle}>Projects</Typography>
      </Grid>
      <Divider orientation="horizontal" />

      <Grid
        className={classes.projectHeader}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <TextField
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={e => setValue(e.target.value)}
          value={value}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch className={classes.titleIcon} />
              </InputAdornment>
            ),
          }}
          label="search"
          variant="outlined"
        />
        <CreateProject />
      </Grid>
      <ProjectList searchProjectValue={value} />
    </Fragment>
  );
};

export default Projects;
