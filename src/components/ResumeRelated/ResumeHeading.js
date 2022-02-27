import { Component } from "react";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.state.firstName, "firstname props");
  }

  render() {
    const lastName = this.props.state.lastName;
    const firstName = this.props.state.firstName;
    const title = this.props.state.title;

    return (
      <div className="resume-heading-container">
        <img
          src="https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg"
          width={"100px"}
          alt="You"
          height={"100px"}
        />

        {/* shows the comma only if lastName is present*/}
        <div>
          {lastName ? (
            <h1>{lastName + ", " + firstName}</h1>
          ) : (
            <h1>{firstName} </h1>
          )}
          <p>{title}</p>
        </div>
      </div>
    );
  }
}
