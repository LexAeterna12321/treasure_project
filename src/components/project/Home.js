import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import TreasureList from "./TreasureList";
import Loader from "./Loader";

export class Home extends Component {
  render() {
    const { treasures } = this.props;
    if (!treasures) {
      return (
        <div className="container center" style={{ marginTop: "30vh" }}>
          <Loader />
        </div>
      );
    } else if (treasures.length === 0) {
      return (
        <h1 className="center">
          No Treasures created <br />
          Add one{" "}
        </h1>
      );
    } else {
      return (
        <React.Fragment>
          <TreasureList treasures={treasures} />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    treasures: state.firestore.ordered.treasures
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "treasures" }])
)(Home);
