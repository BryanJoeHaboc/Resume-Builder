import { Component } from "react";

export default class WorkExperience extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="edit-view-education-info-container">
        <input
          id={"company"}
          onChange={onChange}
          type={"text"}
          placeholder={"Company Name"}
        />
        <input
          id={"position"}
          onChange={onChange}
          type={"text"}
          placeholder={"Position"}
        />
        <input
          id={"workDescription"}
          onChange={onChange}
          type={"text"}
          placeholder={"Work Description"}
        />
        <input
          id={"workDateStarted"}
          onChange={onChange}
          type={"text"}
          placeholder={"Date Started"}
        />
        <input
          id={"workDateEnded"}
          onChange={onChange}
          type={"text"}
          placeholder={"Date Ended"}
        />
      </div>
    );
  }
}
