import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import {
  ADD_TREASURE,
  ADD_TREASURE_ERROR,
  DELETE_TREASURE,
  DELETE_TREASURE_ERROR,
  EDIT_TREASURE,
  EDIT_TREASURE_ERROR
} from "../types";

const initState = {
  treasures: [
    {
      id: "iou9",
      title: "Tres#1",
      item1: "Sword",
      item2: "Crossbow"
    },
    {
      id: "47fhg",
      title: "Tres#2",
      item1: "Sword",
      item2: "Crossbow"
    },
    {
      id: "rf564",
      title: "Tres#3",
      item1: "Sword",
      item2: "Crossbow"
    }
  ]
};

const treasures = (state = initState, action) => {
  const { err } = action;

  switch (action.type) {
    case ADD_TREASURE:
      return state;
    case ADD_TREASURE_ERROR:
      console.log("Error in Treasure addition", err);
      return state;
    case DELETE_TREASURE:
      return state;
    case DELETE_TREASURE_ERROR:
      console.log("Error in Treasure deletion", err);
      return state;
    case EDIT_TREASURE:
      return state;
    case EDIT_TREASURE_ERROR:
      console.log("Error in Treasure edition", err);
      return state;
    default: {
      return state;
    }
  }
};

export default combineReducers({
  treasures,
  firestore: firestoreReducer
});
