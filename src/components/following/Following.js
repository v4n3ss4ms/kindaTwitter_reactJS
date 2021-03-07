import { useState } from "react";
import store from "../../store/store";
import "./Following.scss";

function Following() {
  const [followedUsersList, setFollowedUsersList] = useState(store.getState().followedUsersList);
  store.subscribe(() => setFollowedUsersList(store.getState().followedUsersList));

  return (
    <div>
      {followedUsersList.length > 0 ? (
        <ul className="following">
          {followedUsersList.map((e) => e !== "me" ? (<li className="following__item" key={e}>{e}</li>) : null)}
        </ul>
      ) : (
        "You are not following anybody"
      )}
    </div>
  );
}

export default Following;
