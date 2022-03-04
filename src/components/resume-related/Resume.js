import { Component } from "react";
import ResumeHeading from "./ResumeHeading";
import SideInformation from "./SideInformation";
import WorkExperienceBody from "./WorkExperienceBody";
import SchoolInfoBody from "./SchoolInfoBody";

export default class Resume extends Component {
  render() {
    const { state } = this.props;
    return (
      <div className="resume-view-container">
        <div className="resume-view-header">
          <ResumeHeading state={state} />
        </div>

        <div className="resume-view-body">
          <div className="resume-view-sidebar">
            <SideInformation state={state} />
          </div>
          <div className="resume-view-main-body">
            <WorkExperienceBody state={state} />
            <SchoolInfoBody state={state} />
          </div>
        </div>
      </div>
    );
  }
}
