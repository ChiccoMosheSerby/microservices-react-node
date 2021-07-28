import React,{ useState } from "react";

const { default: PostCreate } = require("./components/PostCreate/PostCreate")

function App() {
  const [newPostTitle,setNewPostTitle] = useState('');

  return (
    <div className="App">
      <PostCreate setNewPostTitle={setNewPostTitle} />
      {newPostTitle}
    </div>
  );
}

export default App;
