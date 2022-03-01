import { Component } from "react";

export default class SideInformation extends Component {
  render() {
    const address = this.props.state.address;
    const number = this.props.state.number;
    const email = this.props.state.email;
    return (
      <div className="resume-sidebar-container">
        {address && (
          <div className="resume-sidebar-indent-address">
            <span>Address:</span>
            <span> {address}</span>
          </div>
        )}
        {number && <div> Phone Number: {number}</div>}
        {email && (
          <div className="resume-sidebar-indent-address">
            <span>Email:</span>{" "}
            <span className="resume-sidebar-break-word">{email}</span>
          </div>
        )}
      </div>
    );
  }
}
