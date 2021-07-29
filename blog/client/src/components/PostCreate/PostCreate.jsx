import React, { useState } from "react";
import axios from "axios";
import { Form } from "./PostCreate.style";

const PostCreate = ({ setPosts }) => {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    let resp =
      title !== "" &&
      (await axios.post("http://localhost:4000/posts", {
        title,
      }));
    setPosts((prev) => [...prev, resp.data]);
    setTitle("");
  };
  return (
    <Form onSubmit={submitHandler}>
      <input
        placeholder="Post here"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">SUBMIT</button>
    </Form>
  );
};

export default PostCreate;
