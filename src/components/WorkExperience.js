import { Component } from "react";

export default class WorkExperience extends Component {
  render() {
    return (
      <div className="edit-view-education-info-container">
        <input
          id={"company"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Company Name"}
        />
        <input
          id={"position"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Position"}
        />
        <input
          id={"workDescription"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Work Description"}
        />
        <input
          id={"workDateStarted"}
          type={"text"}
          placeholder={"Date Started"}
        />
        <input
          id={"workDateEnded"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Date Ended"}
        />
      </div>
    );
  }
}
