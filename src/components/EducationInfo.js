import { Component } from "react";

export default class EducationInfo extends Component {
  render() {
    return (
      <div className="edit-view-education-info-container">
        <input
          id={"school"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"University/School Name"}
        />
        <input
          id={"degree"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Degree"}
        />
        <input
          id={"schoolDateStarted"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Year Started"}
        />
        <input
          id={"schoolDateEnded"}
          onChange={this.props.onChange}
          type={"text"}
          placeholder={"Year Ended"}
        />
      </div>
    );
  }
}
