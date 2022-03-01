import { Component } from "react";

export default class UserInfo extends Component {
  render() {
    return (
      <div className="edit-view-user-info-container">
        <input
          id={"firstName"}
          type={"text"}
          onChange={this.props.onChange}
          placeholder={"First Name"}
        />
        <input
          id={"lastName"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Last Name"}
        />
        <input
          id={"title"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Title"}
        />
        <input
          id={"address"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Address"}
        />
        <input
          id={"email"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Email"}
        />
        <input
          id={"number"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Phone Number"}
        />
      </div>
    );
  }
}
