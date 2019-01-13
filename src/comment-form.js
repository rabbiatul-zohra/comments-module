import React, { Component } from "react";
import Amplify, { API } from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
let apiName = "CommentsCRUD";
let path = "/Comments";
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

  componentDidMount() {
    API.get(apiName, path).then(response => {
      console.log(response);
    });
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
    API.post(apiName, path, newComment)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });

    const newComments = this.state.comments.concat(newComment);
    this.setState({ comments: newComments, text: "" });
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
        {this.state.comments.map(comment => (
          <div>
            <h4>{comment.author}</h4>
            <p key={comment.text}>{comment.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentForm;
