import Amplify, { API } from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
let apiName = "CommentsCRUD";
let path = "/Comments";

const getApi = () => {
  API.get(apiName, path).then(response => {
    console.log(response);
  });
};

const postApi = newComment => {
  API.post(apiName, path, newComment)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    });
};

export { getApi, postApi };
