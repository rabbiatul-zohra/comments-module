import React, { Component } from "react";
import CommentForm from "./comment-components/comment-form";
import CommentList from "./comment-components/comment-list";

import Amplify, { API } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

const apiName = "CommentsCRUD";
const path = "/Comments";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: [],
      commentsCount: 0
    };
  }

  componentDidMount() {
    API.get(apiName, path).then(response => {
      this.setState({
        comments: response.data
      });
      this.setState({ commentsCount: this.state.comments.length });
    });
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(comment.body),
        commentsCount: prevState.comments.concat(comment.body).length
      };
    });
  }

  render() {
    return (
      <div className="App">
        <CommentForm handleAddComment={this.handleAddComment} />
        <span className="comment-count">
          View all({this.state.commentsCount})
        </span>
        <CommentList comments={this.state.comments.reverse()} />
      </div>
    );
  }
}

export default App;
