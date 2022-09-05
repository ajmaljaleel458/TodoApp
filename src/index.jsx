import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

class HelloUser extends React.Component {
  render() {
    return (
      <React.Fragment>
        <App/>
      </React.Fragment>
    );
  }
}

root.render(<HelloUser></HelloUser>);
