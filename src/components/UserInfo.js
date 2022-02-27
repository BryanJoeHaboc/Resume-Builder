import { Component } from "react";

export default class UserInfo extends Component {
  render() {
    const firstName = this.props.state.firstName;
    const lastName = this.props.state.lastName;
    const title = this.props.state.title;
    const address = this.props.state.address;
    const email = this.props.state.email;
    const number = this.props.state.number;

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
