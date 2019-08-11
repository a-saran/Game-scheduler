import { SET_TEAM } from "./types";

const initialState = {
  team1: "",
  team1Players: 0,
  team2: "",
  team2Players: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        team1: action.payload.team1,
        team1Players: action.payload.team1Players,
        team2: action.payload.team2,
        team2Players: action.payload.team2Players,
      };
    // case GET_TEAM:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}
