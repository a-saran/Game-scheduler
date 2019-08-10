import { SET_TEAM } from "./types";

// export const getContacts = () => dispatch => {
//   dispatch({
//     type: GET_TEAM,
//   });
// };

export const setTeam = details => dispatch => {
  dispatch({
    type: SET_TEAM,
    payload: details,
  });
};
