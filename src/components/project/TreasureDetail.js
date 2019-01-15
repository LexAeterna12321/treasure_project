import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteTreasure } from "../store/actions/deleteTreasure";

const TreasureDetail = props => {
  if (props.treasure) {
    const { title, item1, item2, createdAt } = props.treasure;

    // changes timestamp into js date object
    const parsedTime = createdAt.toDate().toLocaleString();

    const deleteTreasure = () => {
      props.deleteTreasure(id);
      props.history.push("/");
    };
    const onButtonClick = () => {
      props.history.push(`/edittreasure/${id}`);
    };

    const id = props.match.params.id;
    return (
      <div
        className="center valign-wrapper"
        style={{ height: "80vh", fontSize: "3rem" }}
      >
        <div className="row ">
          <div className="col s12 ">
            <div className="card-panel teal">
              <span className="white-text">
                <h1>{title.toUpperCase()}</h1>
                <ul>
                  <li>{item1}</li>
                  <li>{item2}</li>
                </ul>
                <p>Storage added: {parsedTime}</p>
              </span>
            </div>
          </div>
          <button
            style={btnStyle}
            className="aves-effect waves-light btn "
            onClick={deleteTreasure}
          >
            Delete Treasure
          </button>
          <button
            style={btnStyle}
            className="aves-effect waves-light btn "
            onClick={onButtonClick}
          >
            Edit Treasure
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>Loading....</p>
      </div>
    );
  }
};

const btnStyle = { padding: "30px", marginRight: "10px", lineHeight: "0" };

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const treasures = state.firestore.data.treasures;
  const treasure = treasures ? treasures[id] : null;

  return { treasure };
};

export default compose(
  connect(
    mapStateToProps,
    { deleteTreasure }
  ),
  firestoreConnect([{ collection: "treasures" }])
)(TreasureDetail);
