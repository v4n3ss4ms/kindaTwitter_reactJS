import { useState } from "react";
import store from "../../store/store";
import { ADD_MSG } from "../../store/actions";
import "./Post.scss";
function Post() {
  const [post, setPost] = useState("");
  const handleChangePost = (e) => setPost(e.target.value);
  const handleClickPostBtn = () => {
    const now = new Date();
    const postObj = {
      id: "me",
      date: now.getTime(),
      msg: post,
    };
    store.dispatch({ type: ADD_MSG, payload: postObj });
    setPost("");
  };

  return (
    <div className="post">
      <textarea className="post__text" onChange={handleChangePost} value={post}/>
      <button className="post__btn" onClick={handleClickPostBtn} disabled={post !== "" ? null : "disabled"}>
        Post
      </button>
    </div>
  );
}

export default Post;
