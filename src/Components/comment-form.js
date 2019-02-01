import React, { Component } from "react";
import { postApi } from "../api-service";

const uuidv1 = require("uuid/v1");
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.state = {
      comments: [
        {
          author: "",
          text: ""
        }
      ]
    };
  }

  handleChange(event) {
    this.setState({ author: "Rabbia", text: event.target.value });
  }

  addComment(event) {
    event.preventDefault();

    let newComment = {
      body: {
        ID: uuidv1(),
        author: this.state.author,
        text: this.state.text
      }
    };
    postApi(newComment);
    this.props.handleAddComment(newComment);
    const newComments = this.state.comments.concat(newComment);
    this.setState({ comments: newComments, text: "" });
  }

  render() {
    return (
      <div>
        <h3>Comments</h3>
        <span>You are signed in as Rabbia</span>
        <form onSubmit={this.addComment}>
          <label>
            Comment:
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Post Comment" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
