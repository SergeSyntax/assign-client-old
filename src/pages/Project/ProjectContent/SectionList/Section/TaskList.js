import React from 'react'
import { Card, CardActionArea, CardContent } from '@material-ui/core'
import _ from 'lodash';

const TaskList = () => {
  return _.times(13, j => (
    <Card key={j} elevation={4} style={{ margin: '1rem', flexShrink: '0' }}>
      <CardActionArea>
        <CardContent>{`Task ${j + 1}`}</CardContent>
      </CardActionArea>
    </Card>
  ))
}

export default TaskList
