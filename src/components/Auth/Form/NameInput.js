import React, { Fragment } from 'react';
import { MdPersonOutline } from 'react-icons/md';
import { Field } from 'react-final-form';
import Label from './Field/Label/Label';
import ErrorMsg from './Field/ErrorMsg';
import FieldInput from './Field/FieldInput';

const NameInput = () => (
  <Field name="name">
    {({ input, meta }) => (
      <Fragment>
        <Label name={input.name} icon={MdPersonOutline} />
        <FieldInput input={input} meta={meta} type="text" placeholder="i.e. Steve Rozmarin" />
        <ErrorMsg meta={meta} />
      </Fragment>
    )}
  </Field>
);

export default NameInput;
