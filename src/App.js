import React, { Component } from "react";
import "./App.css";
import CommentForm from "./Components/comment-form";
import CommentList from "./Components/comment-list";

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
      comments: []
    };
  }

  componentDidMount() {
    API.get(apiName, path).then(response => {
      this.setState({ comments: response.data });
    });
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(comment.body)
      };
    });
  }

  render() {
    return (
      <div className="App">
        <CommentForm handleAddComment={this.handleAddComment} />
        <CommentList comments={this.state.comments.reverse()} />
      </div>
    );
  }
}

export default App;
