import React, { Fragment } from 'react';
import { MdMailOutline } from 'react-icons/md';
import { Field } from 'react-final-form';
import Label from '../../shared/Field/Label';
import ErrorMsg from '../../shared/Field/ErrorMsg';
import FieldInput from '../../shared/Field/FieldInput';

const EmailInput = () => {
  return (
    <Field name="email">
      {({ input, meta }) => (
        <Fragment>
          <Label name={input.name} icon={MdMailOutline} />
          <FieldInput
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
