import { EDIT_TREASURE, EDIT_TREASURE_ERROR } from "../types";

export const editTreasure = (treasure, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    const oldTreasure = getState().firestore.data.treasures[id];

    firestore
      .collection("treasures")
      .doc(id)
      .set({ ...oldTreasure, ...treasure })
      .then(function() {
        dispatch({ type: EDIT_TREASURE });
      })
      .catch(function(err) {
        dispatch({ type: EDIT_TREASURE_ERROR, err });
      });
  };
};

export default editTreasure;
