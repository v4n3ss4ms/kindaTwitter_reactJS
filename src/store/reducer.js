import { ADD_USER, ADD_MSG } from "./actions";
import { getFollowedUsersList, getTimeLine } from "../utils/utils"

const INITIAL_STATE = {
  timeLine: getTimeLine(),
  followedUsersList: getFollowedUsersList(),
};

const addUser = (followedUsersList, user) => followedUsersList.concat(user);
const addMsg = (timeLine, msg ) => msg.concat(timeLine);


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, cards: addUser(state.followedUsersList, action.payload) };
    case ADD_MSG:
      return { ...state, cards: addMsg(state.timeLine, action.payload) };
    default:
      return state;
  }
};

export default reducer;
