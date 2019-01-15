import { ADD_TREASURE, ADD_TREASURE_ERROR } from "../types";
export const addTreasure = treasure => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore
      .collection("treasures")
      .add({
        ...treasure,

        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: ADD_TREASURE, treasure: treasure });
      })
      .catch(err => {
        dispatch({ type: ADD_TREASURE_ERROR, err });
      });
  };
};

export default addTreasure;
