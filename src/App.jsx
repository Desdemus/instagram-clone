import { useState, useEffect } from "react";
import "./App.css";

import Camera from "./components/Camera/Camera";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import Messages from "./components/Messages";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://api.npoint.io/d13616bacdeba49510d9").then((res) => res.json()),
      fetch("https://api.npoint.io/f875ae9f917867084b9c").then((res) => res.json()),
      fetch("https://api.npoint.io/e55823d2026898ce841e").then((res) => res.json())
    ])
      .then(([postsData, storiesData, userData]) => {
        setPosts(postsData);
        setStories(storiesData);
        setUser(userData);
      });
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "reels":
        return <h1>Not implemented yet</h1>;
      case "messages":
        return <Messages />;
    }
  }

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
      <NavBar setSection={setSection} />
    </>
  )
}

export default App;
