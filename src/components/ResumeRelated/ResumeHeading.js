import { Component } from "react";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.state.firstName, "firstname props");
  }

  render() {
    return (
      <div className="resume-heading-container">
        {this.props.state.firstName}
        {this.props.state.lastName}
        {this.props.state.title}
      </div>
    );
  }
}
