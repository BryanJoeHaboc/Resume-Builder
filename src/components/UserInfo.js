import { Component } from "react";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      email: "",
      number: "",
    };
  }

  render() {
    return (
      <div className="edit-view-user-info-container">
        <input type={"text"} placeholder={"First Name"} />
        <input type={"text"} placeholder={"Last Name"} />
        <input type={"text"} placeholder={"Title"} />
        <input type={"text"} placeholder={"Address"} />
        <input type={"text"} placeholder={"Email"} />
        <input type={"text"} placeholder={"Phone Number"} />
      </div>
    );
  }
}
