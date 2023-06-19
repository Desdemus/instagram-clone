import { useState } from "react";
import "./App.css";

import { storiesData } from "./components/mocks/stories";
import { userData } from "./components/mocks/user";
import { postsData } from "./components/mocks/post";

// components
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  return (
    <>
      <TopBar />
      <Stories user={user} stories={stories} />
      <Posts posts={posts} />
    </>
  );
}

export default App;