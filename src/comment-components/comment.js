import React from "react";
import Vote from "./vote-component";

const Timestamp = require("react-timestamp");
const Comment = props => {
  return (
    <div>
      <li>{props.comment.text}</li>
      <Timestamp time={props.comment.time} format="ago" includeDay autoUpdate />
      <Vote />
    </div>
  );
};

export default Comment;
