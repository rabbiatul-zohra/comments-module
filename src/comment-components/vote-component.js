import React from "react";
import "../sass/_main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Vote = () => {
  return (
    <div>
      <input type="submit" className="sp-comment-arrow" />
      <FontAwesomeIcon icon="arrow-up" />
      <FontAwesomeIcon icon="arrow-down" />
    </div>
  );
};

export default Vote;
