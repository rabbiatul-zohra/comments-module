import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./sass/_main.scss";
library.add(faArrowUp, faArrowDown);

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
