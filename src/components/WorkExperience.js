import { Component } from "react";

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    // company: "",
    // position: "",
    // description: "",
    // workDateStarted: "",
    // workDateEnded: "",
  }

  render() {
    return (
      <div className="edit-view-education-info-container">
        <input id={"company"} type={"text"} placeholder={"Company Name"} />
        <input id={"position"} type={"text"} placeholder={"Position"} />
        <input id={"description"} type={"text"} placeholder={"Description"} />
        <input
          id={"workDateStarted"}
          type={"text"}
          placeholder={"Date Started"}
        />
        <input id={"workDateEnded"} type={"text"} placeholder={"Date Ended"} />
      </div>
    );
  }
}
