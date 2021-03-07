import { useState } from "react";
import store from "../../store/store";
import { ADD_USER } from "../../store/actions";
import "./Follow.scss";
function Follow() {
  const [follow, setFollow] = useState("");
  const handleChangeFollow = (e) => setFollow(e.target.value);
  const handleClickBtn = () => {
    store.dispatch({ type: ADD_USER, payload: follow.toLocaleLowerCase() });
    setFollow("");
  };

  return (
    <div className="follow">
      <input className="follow_text" onChange={handleChangeFollow} value={follow}/>
      <button className="follow__btn" onClick={handleClickBtn} disabled={follow !== "" ? null : "disabled"}>Follow</button>
      <p className="follow__hint">*Response is prepared to show more messages if you follow Maria, Patrick, Ursula or Erik</p>
    </div>
  );
}

export default Follow;
