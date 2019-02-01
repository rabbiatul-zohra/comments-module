import React from "react";
import Comment from "./comment";

const CommentList = props => {
  console.log("props", props);
  return (
    <ul>
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </ul>
  );
};
export default CommentList;
