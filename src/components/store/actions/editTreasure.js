import { EDIT_TREASURE, EDIT_TREASURE_ERROR } from "../types";

export const editTreasure = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore
      .collection("treasures")
      .get()
      .then(function() {
        dispatch({ type: EDIT_TREASURE, id });
      })
      .catch(function(err) {
        dispatch({ type: EDIT_TREASURE_ERROR, err });
      });
  };
};

export default editTreasure;
