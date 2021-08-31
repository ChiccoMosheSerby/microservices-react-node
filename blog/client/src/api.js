import axios from "axios";

export const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log("fetch posts: ", res.data);
    return res.data;
  };
