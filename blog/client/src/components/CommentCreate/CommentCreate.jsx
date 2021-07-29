import React, { useState } from "react";
import axios from "axios";
import { Form } from "./CommentCreate.style";

const CommentCreate = ({ postId, fetchAndUpdateComments }) => {
  const [commentContent, setCommentContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let res =
      commentContent !== "" &&
      (await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content: commentContent,
      }));
    // updatePosts();
    console.log(res.data);
    setCommentContent("");
    fetchAndUpdateComments();
  };
  return (
    <Form onSubmit={submitHandler}>
      <input
        type="text"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      />
      <button type="submit">COMMENT</button>
    </Form>
  );
};

export default CommentCreate;
