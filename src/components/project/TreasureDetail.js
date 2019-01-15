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

    const onButtonClick = () => {
      props.deleteTreasure(id);
      props.history.push("/");
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
                <h1>{title}</h1>
                <ul>
                  <li>{item1}</li>
                  <li>{item2}</li>
                </ul>
                {/* Math.floor(new Date().getTime()/1000.0) */}
                <p>Data dodania skrzyni: {parsedTime}</p>
              </span>
            </div>
          </div>
          <button
            className="waves-effect waves-light btn"
            onClick={onButtonClick}
          >
            Delete Treasure
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
