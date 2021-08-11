import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "../Post/Post";
import { Container } from "./PostList.style";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log("fetch posts: ", res.data);
    setPosts(Object.values(res.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    posts.length > 0 && (
      <Container>
        {posts.map((p) => {
          return <Post key={p.id} postData={p} />;
        })}
      </Container>
    )
  );
};

export default PostsList;
