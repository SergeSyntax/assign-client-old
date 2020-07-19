import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import Label from 'components/shared/Field/Label/Label'
import { GoTag } from 'react-icons/go'
import { Select, MenuItem } from '@material-ui/core'
import ErrorMsg from 'components/shared/Field/ErrorMsg'

const AccessibilitySelect = () => {
  return (
    <Field name="accessibility">
    {({ input, meta }) => (
      <Fragment>
        <Label name={input.name} icon={GoTag} />
        <Select
          error={meta.error && meta.touched}
          fullWidth
          variant="outlined"
          {...input}
        >
          <MenuItem value={false}>Private</MenuItem>
          <MenuItem value={true}>Public</MenuItem>
        </Select>
        <ErrorMsg meta={meta} />
      </Fragment>
    )}
  </Field>
  )
}

export default AccessibilitySelect
