import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countLikes: 0,
      countDislikes: 0
    };
  }

  countLikes = () => {
    this.setState({
      countLikes: this.state.countLikes + 1
    });
  };

  countDislikes = () => {
    this.setState({ countDislikes: this.state.countDislikes + 1 });
  };

  render() {
    return (
      <div>
        <span className={"counter"}>{this.state.countLikes}</span>
        <button className={"sp-comment-btn"} onClick={this.countLikes}>
          <FontAwesomeIcon icon="arrow-up" />
        </button>
        <button className={"sp-comment-btn"} onClick={this.countDislikes}>
          <FontAwesomeIcon icon="arrow-down" />
        </button>
        <span className={"counter"}>{this.state.countDislikes}</span>
      </div>
    );
  }
}

export default Vote;
