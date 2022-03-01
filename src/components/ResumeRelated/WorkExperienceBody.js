import { Component } from "react";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.state.firstName, "firstname props");
  }

  render() {
    const company = this.props.state.company;
    const position = this.props.state.position;
    const workDescription = this.props.state.workDescription;
    const workDateStarted = this.props.state.workDateStarted;
    const workDateEnded = this.props.state.workDateEnded;

    return (
      <div className="resume-work-expi-container">
        <h4 style={{ color: "grey" }}>Work Experience</h4>
        <h1>{company}</h1>
        <p>
          <b>{position}</b>
        </p>
        <p> {workDateStarted + "-" + workDateEnded}</p>
        <p>{workDescription}</p>
      </div>
    );
  }
}
