import React, { Component } from "react";
import { getApi, postApi } from "./api-service";

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

  componentDidMount() {
    getApi();
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
    const newComments = this.state.comments.concat(newComment);
    this.setState({ comments: newComments, text: "" });
    this.props.handleAddComment(newComment);
  }

  render() {
    return (
      <div>
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
