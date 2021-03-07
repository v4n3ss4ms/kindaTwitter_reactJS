import {
  FOLLOWED_USERS_LIST,
  TIME_LINE,
  GLOBAL_USERS,
  USER_IMG_URL,
} from "./fakeData/fakeData";

const quickSort = ([x = [], ...xs]) => {
  return ( x.length === 0 ) ? [] : [...quickSort( xs.filter( y => y.date >= x.date ) ), x, ...quickSort(xs.filter( y => y.date < x.date ))];
};
const getFollowedUsersList = () => FOLLOWED_USERS_LIST;
const getTimeLine = () => {
  return quickSort(TIME_LINE);
};
const getUserImgUrl = (user) => USER_IMG_URL[user];
const getGlobalUsers = () => GLOBAL_USERS;




export { getFollowedUsersList, getTimeLine, getUserImgUrl, getGlobalUsers };