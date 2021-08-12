import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { Container } from "./PostList.style";
import { fetchPosts } from "../../api";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postsList = await fetchPosts();
    setPosts(Object.values(postsList));
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
