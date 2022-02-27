import { Component } from "react";
import ResumeHeading from "./ResumeHeading";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-view-container">
        <div className="resume-view-header">
          <ResumeHeading state={this.props.state} />
        </div>

        <div className="resume-view-body">
          <div className="resume-view-sidebar"></div>
          <div className="resume-view-main-body"></div>
        </div>
      </div>
    );
  }
}
