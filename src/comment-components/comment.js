import React from "react";

const Timestamp = require("react-timestamp");
const Comment = props => {
  return (
    <div>
      <li>{props.comment.text}</li>
      <Timestamp
        time={props.comment.created_at}
        format="ago"
        includeDay
        autoUpdate
      />
    </div>
  );
};

export default Comment;
