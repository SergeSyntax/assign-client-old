import React from 'react';
import { Typography, CardActionArea } from '@material-ui/core';

export const TaskTitleText = props => {
  return <CardActionArea {...props}>{`${props.input.value}`}</CardActionArea>;
};
