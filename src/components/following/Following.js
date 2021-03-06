import { useState, useEffect } from "react";
import store from "../../store/store";
import "./Following.scss";

function Following() {
  const [followedUsersList, setFollowedUsersList] = useState(store.getState().followedUsersList);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setFollowedUsersList(store.getState().followedUsersList);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      {followedUsersList.length > 0 ? (
        <ul>
          {followedUsersList.map((e) => (e !== "me") ? <li key={e}>{e}</li> : null)}
        </ul>
      ) : (
        "You are not following anybody"
      )}
    </div>
  );
}

export default Following;
