import React from "react";
import Post from "../Post/Post";
import { Container } from "./PostList.style";

const PostsList = ({ posts }) => {
  return (
    posts?.length !== 0 && (
      <Container>
        {posts?.map((p, index) => {
          return <Post key={index} postData={p} />;
        })}
      </Container>
    )
  );
};

export default PostsList;
