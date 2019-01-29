import React, { Component } from "react";
import "./App.css";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";

import Amplify, { API } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

const apiName = "CommentsCRUD";
const path = "/Comments";

class App extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    API.get(apiName, path).then(response => {
      this.setState({ comments: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <CommentForm />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
