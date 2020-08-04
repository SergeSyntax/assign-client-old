import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles, CardActionArea, Menu } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import SectionMenu from './SectionMenu/SectionMenu';
import SectionTitleForm from './SectionTitleForm/SectionTitleForm';
import { Form, Field } from 'react-final-form';
import FieldInput from 'components/shared/Field/FieldInput';
import generateValidation from 'utils/generateValidation';
import Joi from '@hapi/joi';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import DeleteButton from 'components/shared/MenuItems/DeleteButton';
import { deleteSection, renameSection } from 'actions/sections';
import ErrorMsg from 'components/shared/Field/ErrorMsg';

const schema = Joi.object().keys({
  title: Joi.string().min(1).max(255).required(),
});

const validate = generateValidation(schema);

const useStyles = makeStyles(theme => ({
  sectionMenuButtonIcon: {
    fontSize: '1.4rem',
  },
  titleField: {
    '& .MuiInputBase-input': {
      padding: '1rem',
      fontSize: '1.5rem',
      fontWeight: 600,
      fontFamily: 'inherit',
    },
  },
}));

const SectionHeader = ({ sectionId }) => {
  const sectionTitle = useSelector(state => state.sections.sectionList[sectionId].title);
  const classes = useStyles();
  const [showTitleInput, setShowTitleInput] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = values => {
    if (values.title) {
      dispatch(renameSection({ ...values, sectionId }));
      setShowTitleInput(false);
    }
  };

  // Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      style={{ padding: '1rem', paddingBottom: 0 }}
    >
      <Form
        validate={validate}
        initialValues={{ title: sectionTitle }}
        subscription={{ initialValues: true }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Grid item component="form" xs={10} autoComplete="off" onSubmit={handleSubmit} noValidate>
            <Field name="title" onBlur={handleSubmit} onClick={() => setShowTitleInput(true)}>
              {props => (
                <Fragment>
                  {showTitleInput ? (
                    <Fragment>
                      <FieldInput
                        {...props}
                        className={classes.titleField}
                        autoFocus
                        size="small"
                        type="text"
                      />
                      <ErrorMsg meta={props.meta} />
                    </Fragment>
                  ) : (
                    <CardActionArea
                      {...props}
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        padding: '1rem',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'inherit',
                      }}
                    >
                      {`${props.input.value}`}
                    </CardActionArea>
                  )}
                </Fragment>
              )}
            </Field>
          </Grid>
        )}
      />
      <Grid
        item
        xs={2}
        container
        justify="flex-end"
        alignItems="flex-start"
        style={{ paddingTop: '.5rem' }}
      >
        <MenuIconButton iconClassName={classes.sectionMenuButtonIcon} onClick={openMenu} />
        <Menu
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
          autoFocus
        >
          <DeleteButton onClick={() => dispatch(deleteSection(sectionId))} />
        </Menu>{' '}
      </Grid>
    </Grid>
  );
};

SectionHeader.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default SectionHeader;
