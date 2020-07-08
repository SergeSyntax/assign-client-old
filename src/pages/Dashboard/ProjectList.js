import React, { useEffect } from 'react';
import { Grid, CardHeader, IconButton, Card } from '@material-ui/core';
import { GoKebabVertical } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { fetchProjects } from 'actions/projects';

const ProjectList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <Grid item container direction="column" spacing={2}>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <GoKebabVertical />
              </IconButton>
            }
            title="skynet"
            subheader="Infinity"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProjectList;
