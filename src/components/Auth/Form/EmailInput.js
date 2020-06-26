import React, { Fragment } from 'react';
import { MdMailOutline } from 'react-icons/md';
import { Field } from 'react-final-form';
import Label from './Field/Label/Label';
import ErrorMsg from './Field/ErrorMsg/ErrorMsg';
import FormInput from './Field/FieldInput';

const EmailInput = () => {
  return (
    <Field name="email">
      {({ input, meta }) => (
        <Fragment>
          <Label name={input.name} icon={MdMailOutline} />
          <FormInput
            input={input}
            meta={meta}
            type="email"
            placeholder="i.e. example@example.com"
          />
          <ErrorMsg meta={meta} />
        </Fragment>
      )}
    </Field>
  );
};

export default EmailInput;
