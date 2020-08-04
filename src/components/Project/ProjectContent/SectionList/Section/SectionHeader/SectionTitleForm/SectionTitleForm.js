import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Grid, makeStyles, CardActionArea } from '@material-ui/core';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import { useSelector, useDispatch } from 'react-redux';
import SectionTitleInput from './SectionTitleInput';
import FieldInput from 'components/shared/Field/FieldInput';

const useStyles = makeStyles(theme => ({
  titleForm: {},
  titleField: {
    '& .MuiInputBase-input': {
      // fontSize: '1.6rem',
      // fontWeight: 500,
      // lineHeight: '3rem',
      // letterSpacing: '.1rem',
      // // padding: '.14rem .9rem',
      // fontFamily: 'inherit',
      // height: 'none',
    },
  },
}));

const schema = Joi.object().keys({
  title: Joi.string().min(1).max(255).required(),
});

const validate = generateValidation(schema);

const SectionTitleForm = ({ sectionId }) => {
  const classes = useStyles();
  const [showTitleInput, setShowTitleInput] = useState(false);
  const sectionTitle = useSelector(state => state.sections.sectionList[sectionId]?.title);
  const dispatch = useDispatch();

  const onSubmit = values => {
    if (values.title) {
      // dispatch(renameSection({ ...values, sectionId }));
      setShowTitleInput(false);
    }
  };

  return (
    <Form
      validate={validate}
      initialValues={{ title: sectionTitle }}
      subscription={{ initialValues: true }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form style={{}} autoComplete="off" onSubmit={handleSubmit} noValidate>
          <Field name="title" onBlur={handleSubmit} onClick={() => setShowTitleInput(true)}>
            {props => (
              <Fragment>
                <div className={classes.titleWrapper}>
                  {showTitleInput ? (
                    <FieldInput
                      className={classes.titleField}
                      {...props}
                      autoFocus
                      size="small"
                      type="text"
                    />
                  ) : (
                    <Fragment>
                      <CardActionArea {...props} className={classes.titleText}>
                        <div>{`${props.input.value}`}</div>
                      </CardActionArea>
                    </Fragment>
                  )}
                </div>
                {/* <ErrorMsg meta={props.meta} /> */}
              </Fragment>
            )}
          </Field>
        </form>
      )}
    />
  );
};

SectionTitleForm.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default SectionTitleForm;
