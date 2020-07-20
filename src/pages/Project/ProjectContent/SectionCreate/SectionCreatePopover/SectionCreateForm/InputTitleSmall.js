import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import Label from 'components/shared/Field/Label'
import FieldInput from 'components/shared/Field/FieldInput'
import ErrorMsg from 'components/shared/Field/ErrorMsg'
import { GoTag } from 'react-icons/go'

const InputTitleSmall = () => {
  return (
    <Field name="title">
    {({ input, meta }) => (
      <Fragment>
        <Label name={input.name} icon={GoTag} />
        <FieldInput
          autoFocus
          input={input}
          meta={meta}
          type="text"
          placeholder="i.e. Todo"
        />
        <ErrorMsg meta={meta} />
      </Fragment>
    )}
  </Field>
  )
}

export default InputTitleSmall
