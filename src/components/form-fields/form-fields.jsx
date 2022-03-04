import { Component } from "react";

export default class FormFields extends Component {
  render() {
    const { onChange, inputFields } = this.props;
    return (
      <div className="edit-view-education-info-container">
        {inputFields.map((inputField) => {
          const inputId = Object.keys(inputField).pop();
          const inputPlaceholder = Object.values(inputField).pop();
          return (
            <input
              key={inputId}
              id={inputId}
              onChange={onChange}
              type={"text"}
              placeholder={inputPlaceholder}
            />
          );
        })}
        {/* <input
          id={"school"}
          onChange={onChange}
          type={"text"}
          placeholder={"University/School Name"}
        />
        <input
          id={"degree"}
          onChange={onChange}
          type={"text"}
          placeholder={"Degree"}
        />
        <input
          id={"schoolDateStarted"}
          onChange={onChange}
          type={"text"}
          placeholder={"Year Started"}
        />
        <input
          id={"schoolDateEnded"}
          onChange={onChange}
          type={"text"}
          placeholder={"Year Ended"}
        /> */}
      </div>
    );
  }
}
