import { DELETE_TREASURE, DELETE_TREASURE_ERROR } from "../types";

export const deleteTreasure = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore
      .collection("treasures")
      .doc(id)
      .delete()
      .then(function() {
        dispatch({ type: DELETE_TREASURE, id });
      })
      .catch(function(err) {
        dispatch({ type: DELETE_TREASURE_ERROR, err });
      });
  };
};

export default deleteTreasure;
