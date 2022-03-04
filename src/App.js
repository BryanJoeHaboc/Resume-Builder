import "./App.css";
import FormFields from "./components/form-fields/form-fields";
import { Component } from "react";
import Resume from "./components/resume-related/Resume";

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
    const educInfoInputFields = [
      { school: "University/School Name" },
      { degree: "Degree" },
      { schoolDateStarted: "Year Started" },
      { schoolDateEnded: "Year Ended" },
    ];
    const userInfoInputFields = [
      { firstName: "First Name" },
      { lastName: "Last Name" },
      { title: "Title" },
      { address: "Address" },
      { email: "Email" },
      { number: "Phone Number" },
    ];
    const workExperienceInputFields = [
      { company: "Company Name" },
      { position: "Position" },
      { workDescription: "Work Description" },
      { workDateStarted: "Date Started" },
      { workDateEnded: "Date Ended" },
    ];

    return (
      <div className="App">
        <div className="edit-view-container">
          <FormFields
            state={this.state}
            onChange={this.onChange}
            inputFields={userInfoInputFields}
          />

          <FormFields
            state={this.state}
            onChange={this.onChange}
            inputFields={educInfoInputFields}
          />

          <FormFields
            state={this.state}
            onChange={this.onChange}
            inputFields={workExperienceInputFields}
          />

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
