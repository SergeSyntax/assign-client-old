import React from 'react';
import { CardActionArea } from '@material-ui/core';

export const TaskTitleText = props => {
  return <CardActionArea {...props}>{`${props.input.value}`}</CardActionArea>;
};
