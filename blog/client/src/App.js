import React, { useEffect } from "react";
import PostsList from "./components/PostsList/PostsList";
import PostCreate from "./components/PostCreate/PostCreate";
import usePostsUpdater from "./hooks/usePostsUpdater";

import styled from 'styled-components';

const StyledApp = styled.div`
padding:10px;
  
`;
function App() {
  const { posts, fetchAndUpdatePosts } = usePostsUpdater();

  useEffect(() => {
    fetchAndUpdatePosts();
  }, []);

  return (
    <StyledApp >
      <PostCreate updatePosts={() => fetchAndUpdatePosts()} />
      <PostsList posts={posts} />
    </StyledApp>
  );
}

export default App;
