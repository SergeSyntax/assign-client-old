import React from 'react';
import { useSelector } from 'react-redux';
import CommentItem from './CommentItem';

export default function ActivityList({ taskId }) {
  const commentList = useSelector(state => state.comments.commentList);
  const loadingComments = useSelector(state => state.comments.loadingComments);

  return loadingComments ? (
    <div>loading</div>
  ) : (
    Object.values(commentList)
      .filter(comment => comment.taskId === taskId)
      .map(comment => <CommentItem key={comment.id} commentId={comment.id} />)
  );
}
