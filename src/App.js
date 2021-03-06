import "./App.scss";
import Following from "./components/following/Following";
import Follow from "./components/follow/Follow";
import Wall from "./components/wall/Wall";
import Post from "./components/post/Post";

function App() {
  return (
    <div className="kinda-twitter">
      <aside className="kt-aside">
        <Following />
        <Follow />
      </aside>
      <main className="kt-main">
        <Wall />
        <Post />
      </main>
    </div>
  );
}

export default App;
