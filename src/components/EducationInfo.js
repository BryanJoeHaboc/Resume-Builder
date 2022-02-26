import { Component } from "react";

export default class EducationInfo extends Component {
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
      <div className="edit-view-education-info-container">
        <input type={"text"} placeholder={"University/School Name"} />
        <input type={"text"} placeholder={"Degree"} />
        <input type={"text"} placeholder={"Year Started"} />
        <input type={"text"} placeholder={"Year Ended"} />
      </div>
    );
  }
}
