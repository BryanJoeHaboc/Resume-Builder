import { Component } from "react";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    // firstName: "hey",
    // lastName: "",
    // title: "",
    // address: "",
    // email: "",
    // number: "",
  }

  render() {
    return (
      <div className="edit-view-user-info-container">
        <input
          id={"firstName"}
          onChange={this.props.onChange}
          type={"text"}
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
          id={"phoneNumber"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Phone Number"}
        />
      </div>
    );
  }
}
