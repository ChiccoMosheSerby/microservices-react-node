import React, { useState } from "react";
import axios from "axios";
import { Form } from "./CommentCreate.style";

const CommentCreate = ({ postId, fetchAndUpdateComments }) => {
  const [content, setCommentContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('contenthhhhhhhhhhhhh',content);
    let res =
    content !== "" &&
      (await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content,
      }));
    // updatePosts();
    console.log(res.data);
    setCommentContent("");
    // fetchAndUpdateComments();
  };
  return (
    <Form onSubmit={submitHandler}>
      <input
        type="text"
        value={content}
        onChange={(e) => setCommentContent(e.target.value)}
      />
      <button type="submit">COMMENT</button>
    </Form>
  );
};

export default CommentCreate;
