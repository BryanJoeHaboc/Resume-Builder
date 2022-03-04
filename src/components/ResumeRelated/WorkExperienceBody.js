import { Component } from "react";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.state.firstName, "firstname props");
  }

  render() {
    const {
      company,
      position,
      workDescription,
      workDateStarted,
      workDateEnded,
    } = this.props.state;

    return (
      <div className="resume-work-expi-container">
        {company && <h4 style={{ color: "grey" }}>Work Experience</h4>}
        <h1>{company}</h1>
        <p>
          <b>{position}</b>
        </p>
        <p>
          {" "}
          {workDateEnded
            ? workDateStarted + "-" + workDateEnded
            : workDateStarted}
        </p>
        <p>{workDescription}</p>
      </div>
    );
  }
}
