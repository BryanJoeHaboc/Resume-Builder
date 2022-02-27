import { Component } from "react";

export default class EducationInfo extends Component {
  constructor(props) {
    super(props);
    // school: "",
    // degree: "",
    // schoolDateStarted: "",
    // schoolDateEnded: "",
  }

  render() {
    return (
      <div className="edit-view-education-info-container">
        <input
          id={"school"}
          type={"text"}
          placeholder={"University/School Name"}
        />
        <input id={"degree"} type={"text"} placeholder={"Degree"} />
        <input
          id={"schoolDateStarted"}
          type={"text"}
          placeholder={"Year Started"}
        />
        <input
          id={"schoolDateEnded"}
          type={"text"}
          placeholder={"Year Ended"}
        />
      </div>
    );
  }
}
