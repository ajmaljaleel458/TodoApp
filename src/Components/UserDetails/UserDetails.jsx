import React, { Component } from "react";
import "./UserDetails.css";

export class UserDetails extends Component {
  render() {
    return (
      <div className="user-details">
        <h6 className="user-name">
          <img
            className="profile"
            src="https://avatars.githubusercontent.com/u/98944911?v=4"
            alt=""
          />
          Ajmal Jaleel
        </h6>
      </div>
    );
  }
}

export default UserDetails;
