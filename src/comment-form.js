import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  state = {
    comments: [
      {
        author: "",
        text: ""
      }
    ]
  };

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  addComment(event) {
    event.preventDefault();
    const newComment = {
      author: "Rabbia",
      text: this.state.text
    };
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
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentForm;
