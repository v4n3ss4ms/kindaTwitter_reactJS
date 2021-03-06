import {
  FOLLOWED_USERS_LIST,
  TIME_LINE,
  GLOBAL_USERS,
  USER_IMG_URL,
} from "./fakeData/fakeData";

const getFollowedUsersList = () => FOLLOWED_USERS_LIST;
const getTimeLine = () => {
  // todo: order by date
  return TIME_LINE;
};
const getUserImgUrl = (user) => USER_IMG_URL[user];
const getGlobalUsers = () => GLOBAL_USERS;

export { getFollowedUsersList, getTimeLine, getUserImgUrl, getGlobalUsers };
