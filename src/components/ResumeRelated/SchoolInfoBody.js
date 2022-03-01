import { Component } from "react";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.state.firstName, "firstname props");
  }

  render() {
    const school = this.props.state.school;
    const degree = this.props.state.degree;
    const schoolDateStarted = this.props.state.schoolDateStarted;
    const schoolDateEnded = this.props.state.schoolDateEnded;

    return (
      <div className="resume-work-expi-container resume-educ-add-line-top">
        <h4 style={{ color: "grey" }}>Educational Background</h4>
        <h2>{school}</h2>
        <p>
          <b>{degree}</b>
        </p>
        <p> {schoolDateStarted + "-" + schoolDateEnded}</p>
      </div>
    );
  }
}
