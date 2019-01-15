import React, { Component } from "react";
import editTreasure from "../store/actions/editTreasure";
import { connect } from "react-redux";

import Modal from "./Modal";

class EditTreasure extends Component {
  state = {
    modalActive: false,
    title: "",
    item1: "",
    item2: ""
  };

  componentDidMount() {
    const { title, item1, item2 } = this.props.treasure;
    this.setState({
      title: title,
      item1: item1,
      item2: item2
    });
  }
  onInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const treasure = { ...this.state };

    this.props.editTreasure(treasure, id);
    this.props.history.push("/");
  };

  showModal = e => {
    e.preventDefault();
    this.setState({ modalActive: !this.state.modalActive });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center">EDIT TREASURE</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="title"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                  value={this.state.title}
                  required
                />
                <label htmlFor="title" className="active">
                  Treasure Title
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  id="item1"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                  value={this.state.item1}
                />
                <label htmlFor="item1" className="active">
                  Item 1
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  id="item2"
                  type="text"
                  className="validate"
                  onChange={this.onInputChange}
                  value={this.state.item2}
                />
                <label htmlFor="item2" className="active">
                  Item 2
                </label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              style={{ margin: "20px" }}
            >
              Edit Treasure
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

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const treasures = state.firestore.data.treasures;
  const treasure = treasures ? treasures[id] : null;
  return {
    treasure
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTreasure: (treasure, id) => dispatch(editTreasure(treasure, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTreasure);
