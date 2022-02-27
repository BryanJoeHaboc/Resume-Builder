import { Component } from "react";
import ResumeHeading from "./ResumeHeading";

export default class Resume extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="resume-view-container">
        <ResumeHeading state={this.props.state} />
      </div>
    );
  }
}
