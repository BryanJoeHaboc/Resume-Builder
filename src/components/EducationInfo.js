import { Component } from "react";

export default class EducationInfo extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="edit-view-education-info-container">
        <input
          id={"school"}
          onChange={onChange}
          type={"text"}
          placeholder={"University/School Name"}
        />
        <input
          id={"degree"}
          onChange={onChange}
          type={"text"}
          placeholder={"Degree"}
        />
        <input
          id={"schoolDateStarted"}
          onChange={onChange}
          type={"text"}
          placeholder={"Year Started"}
        />
        <input
          id={"schoolDateEnded"}
          onChange={onChange}
          type={"text"}
          placeholder={"Year Ended"}
        />
      </div>
    );
  }
}
