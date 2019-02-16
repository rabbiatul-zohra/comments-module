import React from "react";
import Vote from "./vote-component";

const Timestamp = require("react-timestamp");
const Comment = props => {
  return (
    <div className="comment">
      <li className="comment-text">
        <strong>{props.comment.author}</strong>
      </li>
      <Timestamp
        time={props.comment.time}
        format="ago"
        includeDay
        autoUpdate={300}
        className="timestamp"
      />
      <li className="comment-text">{props.comment.text}</li>
      <Vote />
    </div>
  );
};

export default Comment;
