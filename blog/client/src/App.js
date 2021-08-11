import React from "react";
import PostCreate from "./components/PostCreate/PostCreate";
import PostList from "./components/PostsList/PostsList";

import styled from "styled-components";

const StyledApp = styled.div`
  background-color: #f1f3f4;
`;
const App = () => {
  return (
    <StyledApp>
      <PostCreate />
      <hr />
      <PostList />
    </StyledApp>
  );
};
export default App;
