import React, { Component } from "react";
import "./App.css";
import CommentForm from "./comment-form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentForm />
      </div>
    );
  }
}

export default App;
