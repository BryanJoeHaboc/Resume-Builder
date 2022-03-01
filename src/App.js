import "./App.css";
import EducationInfo from "./components/EducationInfo";
import UserInfo from "./components/UserInfo";
import WorkExperience from "./components/WorkExperience";
import { Component } from "react";
import Resume from "./components/ResumeRelated/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleFillData = this.handleFillData.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      // General Info
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      email: "",
      number: "",
      // Education Info
      school: "",
      degree: "",
      schoolDateStarted: "",
      schoolDateEnded: "",
      workDescription: "",
      // Work Experience
      company: "",
      position: "",
      description: "",
      workDateStarted: "",
      workDateEnded: "",
    };
  }

  handleReset() {
    this.setState({
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      email: "",
      number: "",
      school: "",
      degree: "",
      schoolDateStarted: "",
      schoolDateEnded: "",
      company: "",
      position: "",
      description: "",
      workDateStarted: "",
      workDateEnded: "",
      workDescription: "",
    });
  }

  handleFillData() {
    //NOTE: Add work and school experiences input. Make states automattically created;
    // NOTE: Make profile picture disapper and replace a div saying 'Picture Here'
    console.log(this);
    this.setState({
      firstName: "Gary",
      lastName: "Thesnail",
      title: "Sr. Software Engineer",
      address: "212 William St #1 Oakdale, Louisiana(LA), 71463",
      email: "gthesnail@mydomain.com",
      number: "09234567891",
      school: "Bikini Bottom Boating School ",
      degree: "Bachelor of Science in Electronics Engineering",
      schoolDateStarted: "June 2015",
      schoolDateEnded: "April 2018",
      company: "Boogle Incorporated",
      position: "Sr. Software Engineer",
      description: "Cupidatat in ex voluptate anim ipsum.",
      workDateStarted: "May 2018",
      workDateEnded: "Present",
      workDescription:
        "Amet culpa proident excepteur ea irure tempor minim anim magna commodo cillum. Elit veniam sit occaecat veniam magna enim sint deserunt et cupidatat est sint laborum adipisicing. Laborum mollit pariatur exercitation nostrud.",
    });
  }

  onChange(e) {
    console.log(this.state);
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="edit-view-container">
          <UserInfo state={this.state} onChange={this.onChange} />
          <EducationInfo state={this.state} onChange={this.onChange} />
          <WorkExperience state={this.state} onChange={this.onChange} />
          <button className="reset-button" onClick={this.handleReset}>
            Reset
          </button>
          <button className="fill-data" onClick={this.handleFillData}>
            Add Sample Data
          </button>
        </div>
        <div className="results-view-container">
          <Resume state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
