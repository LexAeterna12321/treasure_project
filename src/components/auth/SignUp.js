import React from "react";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.onInputChange}
                />{" "}
                <label htmlFor="email"> email </label>{" "}
              </div>{" "}
              <div className="input-field col s6">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.onInputChange}
                />{" "}
                <label htmlFor="password"> password </label>{" "}
              </div>{" "}
              <div className="input-field col s6">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                />{" "}
                <label htmlFor="firstName"> First Name </label>{" "}
              </div>{" "}
              <div className="input-field col s6">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                />{" "}
                <label htmlFor="lastName"> Last Name </label>{" "}
              </div>{" "}
            </div>{" "}
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Create Account{" "}
            </button>{" "}
          </form>{" "}
        </div>
      </div>
    );
  }
}

export default SignUp;
