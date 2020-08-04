import React from 'react';
import { Divider, makeStyles, Grid, Container, Hidden } from '@material-ui/core';
import './Dashboard.scss';
import './Dashboard.scss';
import Header from '../../components/Dashboard/Header/Header';
import Projects from './Project/Projects';
import DashboardNavbar from './DashboardNavbar';

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
  },
  projectTitle: {
    fontWeight: 500,
    fontSize: '2rem',
    textTransform: 'capitalize',
  },
  content: {
    padding: '0 2rem',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className="dashboard">
      <Header />
      <Container className={classes.container} maxWidth="lg">
        <Grid container alignItems="stretch" className={classes.gridRoot}>
          <Hidden mdDown>
            <Grid item lg={3}>
              <DashboardNavbar />
            </Grid>
            <Divider orientation="vertical" />
          </Hidden>

          <Grid className={classes.content} sm={11} md={8} lg={6} item>
            <Projects />
          </Grid>
          <Hidden mdDown>
            <Divider orientation="vertical" />
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
