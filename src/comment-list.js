import React from "react";
import Comment from "./comment";

const CommentList = props => {
  return (
    <ul>
      {props.comments.map((comment, index) => (
        <Comment key={comment.ID} comment={comment} />
      ))}
    </ul>
  );
};
export default CommentList;
