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
      // Work Experience
      company: "",
      position: "",
      description: "",
      workDateStarted: "",
      workDateEnded: "",
    };
  }

  onChange(e) {
    // console.log(this.state);
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="edit-view-container">
          <UserInfo state={this.state} onChange={this.onChange} />
          <EducationInfo state={this.state} />
          <WorkExperience state={this.state} />
        </div>
        <div className="results-view-container">
          <Resume state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
