import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { GoTag } from 'react-icons/go';
import Label from 'components/Auth/Form/Field/Label/Label';
import FieldInput from 'components/Auth/Form/Field/FieldInput';
import ErrorMsg from 'components/Auth/Form/Field/ErrorMsg';

const TitleInput = () => {
  return (
    <Field name="title">
      {({ input, meta }) => (
        <Fragment>
          <Label name={input.name} icon={GoTag} />
          <FieldInput input={input} meta={meta} type="text" placeholder="i.e. SkyNet Project" />
          <ErrorMsg meta={meta} />
        </Fragment>
      )}
    </Field>
  );
};

export default TitleInput;
