import React from 'react';
import { Divider, makeStyles, Grid, Container } from '@material-ui/core';
import './Dashboard.scss';
import './Dashboard.scss';
import Header from '../../components/Dashboard/Header/Header';
import DashboardContent from './DashboardContent';
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
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className="dashboard">
      <Header />
      <Container className={classes.container} maxWidth="lg">
        <Grid container alignItems="stretch" className={classes.gridRoot}>
          <Grid item sm={3}>
            <DashboardNavbar />
          </Grid>
          <Divider orientation="vertical" />

          <Grid className={classes.content} sm={6} item>
            <DashboardContent />
          </Grid>

          <Divider orientation="vertical" />
        </Grid>
      </Container>
    </div>
    // <Grid container direction="column">
    //   <Grid item>
    //     <AppBar position="relative">
    //       <Toolbar className={classes.header}>
    //         <Grid container justify="space-around" alignItems="center">
    //           <Grid item>
    //             <Logo />
    //           </Grid>
    //           <Grid item container alignItems="center" sm={3} className={classes.headerOptions}>

    //           </Grid>
    //         </Grid>
    //       </Toolbar>
    //     </AppBar>
    //   </Grid>
    //   <Grid item container>
    //     <Container maxWidth="lg">
    //       <Grid container>
    //         <Grid item xs={false} sm={4}>
    //           {' '}

    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //           <Grid item container direction="row" alignItems="center" justify="space-between">

    //           </Grid>
    //         </Grid>
    //         <Grid item xs={false} sm={1}></Grid>
    //       </Grid>
    //     </Container>
    //   </Grid>
    // </Grid>
    // <div className="dashboard">
    // <header className="dashboard__header">

    // </header>
    //   <div className="container">

    //     <div className="dashboard__content">project page</div>
    //   </div>
    // </div>
  );
};

export default Dashboard;
