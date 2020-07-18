import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  IconButton,
  CardActionArea,
  CardContent,
  Button,
  makeStyles,
  Card,
  TextField,
  FormHelperText,
  Hidden,
} from '@material-ui/core';
import { GoKebabHorizontal, GoTag } from 'react-icons/go';
import TaskList from './TaskList';
import { Form } from 'react-final-form';
import InputTitleSmall from '../../SectionCreate/SectionCreatePopover/SectionCreateForm/InputTitleSmall';
import SectionCreateActions from '../../SectionCreate/SectionCreatePopover/SectionCreateForm/SectionCreateActions/SectionCreateActions';
import Label from 'components/Auth/Form/Field/Label/Label';

const useStyles = makeStyles(theme => ({
  section: {
    background: '#EBECF0',
    maxHeight: '96%',
    flexShrink: '0',
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
    padding: '2rem',
  },
  taskList: {
    maxHeight: '95%',
    // maxHeight: '56rem',
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

const Section = ({ section }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={11}
      sm={4}
      md={3}
      lg={2}
      container
      wrap="nowrap"
      direction="column"
      component={Card}
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

      <Grid container wrap="nowrap" direction="column" className={classes.taskList}>
        <TaskList />
        <Card style={{ margin: '1rem', flexShrink: '0', padding: '0 1rem' }}>
          <CardContent style={{ padding: '1rem' }}>
            {' '}
            <Form
              validate={() => {}}
              onSubmit={() => {}}
              render={({ handleSubmit }) => (
                <form autoComplete="off" onSubmit={handleSubmit} noValidate>
                  <Grid
                    item
                    container
                    wrap="nowrap"
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Grid item>
                      <GoTag style={{ fontSize: '2rem' }} />
                    </Grid>
                    <Grid item>
                      <TextField variant="standard" label="Task's Title" />
                      <FormHelperText
                        // style={{ visibility: 'hidden' }}
                        error={true}
                        color="secondary"
                        id="component-error-text"
                      >
                        Error
                      </FormHelperText>
                    </Grid>
                  </Grid>

                  <SectionCreateActions handleClose={() => {}} />
                </form>
              )}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid container justify="center" alignItems="center" className={classes.sectionActions}>
        <Button fullWidth size="small">
          + Create Task
        </Button>
      </Grid>
    </Grid>
  );
};

Section.propTypes = { section: PropTypes.object.isRequired };

export default Section;
