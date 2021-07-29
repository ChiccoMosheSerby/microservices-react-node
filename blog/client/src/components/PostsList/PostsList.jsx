import React from "react";
import Post from "../Post/Post";
import { Container } from "./PostList.style";

const PostsList = ({ posts }) => {
  const renderPosts = posts?.map((p) => {
    return <Post key={p.id} postData={p} />;
  });
  return posts?.length !== 0 && <Container>{renderPosts}</Container>;
};

export default PostsList;
