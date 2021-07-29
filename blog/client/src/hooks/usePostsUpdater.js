import  { useState } from "react";
import axios from "axios";

const usePostsUpdater = () => {
  const [posts, setPosts] = useState([]);

  const fetchAndUpdatePosts = async () => {
    let res = await axios.get("http://localhost:4000/posts");
    // console.log("App PostsList", res.data);
    const postsArray = Object.values(res.data);

    console.log("postsArray", postsArray);

    setPosts(postsArray);
  };

  return {
    posts,
    fetchAndUpdatePosts,
  };
};

export default usePostsUpdater;
