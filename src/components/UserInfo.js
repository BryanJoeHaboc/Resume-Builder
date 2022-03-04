import { Component } from "react";

export default class UserInfo extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="edit-view-user-info-container">
        <input
          id={"firstName"}
          type={"text"}
          onChange={onChange}
          placeholder={"First Name"}
        />
        <input
          id={"lastName"}
          onChange={onChange}
          type={"text"}
          placeholder={"Last Name"}
        />
        <input
          id={"title"}
          onChange={onChange}
          type={"text"}
          placeholder={"Title"}
        />
        <input
          id={"address"}
          onChange={onChange}
          type={"text"}
          placeholder={"Address"}
        />
        <input
          id={"email"}
          onChange={onChange}
          type={"text"}
          placeholder={"Email"}
        />
        <input
          id={"number"}
          onChange={onChange}
          type={"text"}
          placeholder={"Phone Number"}
        />
      </div>
    );
  }
}
