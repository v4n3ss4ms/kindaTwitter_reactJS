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
        <ul className="wall">
          {timeLine.map((e) => {
            return (
            <li className="item" key={e.date}>
                <div className="item__img"><img src={getUserImgUrl(e.id)} alt={e.id}/></div>
                <div>
                  <p className="item__date">{millisecsToString(e.date)}</p>
                  <p className="item__msg">{e.msg}</p>
                </div>
            </li>);
          })}
        </ul>
      ) : (
        "Your time line is empty"
      )}
    </div>
  );
}

export default Wall;
