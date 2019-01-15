import React, { Component } from "react";
import addTreasure from "../store/actions/addTreasure";
import { connect } from "react-redux";

import Modal from "./Modal";

class AddTreasure extends Component {
  state = {
    modalActive: false,
    title: "",
    item1: "",
    item2: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const treasure = { ...this.state };

    this.props.addTreasure(treasure);
    this.props.history.push("/");
  };

  showModal = e => {
    e.preventDefault();
    this.setState({ modalActive: !this.state.modalActive });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center">CREATE NEW TREASURE</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="title"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                  required
                />
                <label htmlFor="title">Treasure Title</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="item1"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                />
                <label htmlFor="item1">Item 1</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="item2"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                />
                <label htmlFor="item2">Item 2</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              style={{ margin: "20px" }}
            >
              Add Treasure
            </button>

            <button
              className="btn waves-effect waves-light"
              onClick={this.showModal}
            >
              Buy Additional Storage
            </button>
          </form>
        </div>
        {this.state.modalActive ? <Modal showModal={this.showModal} /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTreasure: treasure => dispatch(addTreasure(treasure))
  };
};

export default connect(
  null,

  mapDispatchToProps
)(AddTreasure);
