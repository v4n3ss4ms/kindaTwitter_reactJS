import { useState, useEffect } from "react";
import store from "../../store/store";
import { getUserImgUrl } from "../../utils/utils";
import "./Wall.scss";
function Wall() {
  const [followedUsersList, setFollowedUsersList] = useState(store.getState().followedUsersList);
  const filterUsers = (user) => followedUsersList.includes(user.id);
  const [timeLine, setTimeLine] = useState(store.getState().timeLine.filter(filterUsers));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setFollowedUsersList(store.getState().followedUsersList);
      setTimeLine(store.getState().timeLine.filter(filterUsers));
    });
    return unsubscribe;
  }, []);

  const millisecsToString = (date) => new Date(date).toLocaleString();

  return (
    <div>
      {timeLine.length > 0 ? (
        <div>
          {timeLine.map((e) => {
            return (
            <div key={e.date}>
                <div><img src={getUserImgUrl(e.id)} alt={e.id}/></div>
                <div>{millisecsToString(e.date)}</div>
                <div>{e.msg}</div>
            </div>);
          })}
        </div>
      ) : (
        "Your time line is empty"
      )}
    </div>
  );
}

export default Wall;
