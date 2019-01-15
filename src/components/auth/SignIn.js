import React from "react";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
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
            </div>{" "}
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Login{" "}
            </button>{" "}
          </form>{" "}
        </div>
      </div>
    );
  }
}

export default SignIn;
