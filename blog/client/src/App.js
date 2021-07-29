import React, { useEffect, useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import PostCreate from "./components/PostCreate/PostCreate";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async (setPosts) => {
    let resp = await axios.get("http://localhost:4000/posts");
    // console.log("App PostsList", resp.data);
    const postsArray = Object.values(resp.data);

    console.log("postsArray", postsArray);

    setPosts(postsArray);
  };

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <div stayl={{ padding: "10px" }}>
      <h1>Create Post</h1>
      <PostCreate setPosts={getPosts} />
      {posts && <PostsList posts={posts} />}
    </div>
  );
}

export default App;
