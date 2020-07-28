import React from 'react';
import { Typography } from '@material-ui/core';

export const TaskTitleText = props => {
  return <Typography {...props}>{`${props.input.value}`}</Typography>;
};
