import { ADD_USER, ADD_MSG } from "./actions";
import { getFollowedUsersList, getTimeLine } from "../utils/utils"

const INITIAL_STATE = {
  timeLine: getTimeLine(),
  followedUsersList: getFollowedUsersList(),
};

const addUser = (followedUsersList, user) => followedUsersList.includes(user) ? [...followedUsersList] : [...followedUsersList, user];
const addMsg = (timeLine, msg ) => [msg, ...timeLine];


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, followedUsersList: addUser(state.followedUsersList, action.payload) };
    case ADD_MSG:
      return { ...state, timeLine: addMsg(state.timeLine, action.payload) };
    default:
      return state;
  }
};

export default reducer;
