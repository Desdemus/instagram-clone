import { useState, useEffect } from "react";
import "./App.css";

import { storiesData } from "./components/mocks/stories";
import { userData } from "./components/mocks/user";
import { postsData } from "./components/mocks/post";
import Camera from "./components/Camera/Camera";

// components
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  useEffect(() => {
    fetch("https://api.npoint.io/6976ef2a03c6f34df358")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }), [posts];

  useEffect(() => {
    fetch("https://api.npoint.io/2f8cacfef04215d94396")
      .then((res) => res.json())
      .then((data) => setStories(data))
  }), [stories];

  useEffect(() => {
    fetch("https://api.npoint.io/e55823d2026898ce841e")
      .then((res) => res.json())
      .then((data) => setUser(data))
  }), [user];

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
      case "tv":
        return <h1>Not implemented yet</h1>;
      case "messagges":
        return <h1>Not implemented yet</h1>;
    }
  }

  return (
    <>

      <TopBar />
      {onSectionRender()}
      <NavBar setSection={setSection} />

    </>
  )
}

export default App;