import React, { Fragment, useRef, useEffect } from 'react';
import { ClickAwayListener, Card, CardContent, TextField } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import ErrorMsg from 'components/shared/Field/ErrorMsg';
import SectionCreateActions from '../../SectionCreate/SectionCreatePopover/SectionCreateForm/SectionCreateActions/SectionCreateActions';
import { useDispatch } from 'react-redux';
import { createTask } from 'actions/tasks';

const TaskCreate = ({ sectionId, handleClose }) => {
  const dispatch = useDispatch();
  const ref = useRef();

  const TextInput = ({ input, meta: { touched, error }, ...rest }) => {
    return (
      <TextField
        multiline
        {...input}
        id={input.name}
        fullWidth
        error={touched && error && true}
        className="input"
        variant="outlined"
        {...rest}
      />
    );
  };

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Card style={{ margin: '1rem', flexShrink: '0', padding: '0 1rem' }}>
        <CardContent style={{ padding: '1rem' }}>
          <Form
            validate={() => {}}
            onSubmit={values => {
              dispatch(createTask({ ...values, sectionId }));
            }}
            render={({ handleSubmit }) => (
              <form ref={ref} autoComplete="off" onSubmit={handleSubmit} noValidate>
                <Field name="title">
                  {({ input, meta }) => (
                    <Fragment>
                      <TextInput
                        autoFocus
                        input={input}
                        meta={meta}
                        name="title"
                        type="text"
                        variant="standard"
                        label="Task's Title"
                      />
                      <ErrorMsg meta={meta} />
                    </Fragment>
                  )}
                </Field>
                <SectionCreateActions handleClose={handleClose} />
              </form>
            )}
          />
        </CardContent>
      </Card>
    </ClickAwayListener>
  );
};

export default TaskCreate;
