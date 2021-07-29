import React from "react";

const CommentsList = ({ comments }) => {
  return comments.map((c) => {
    return <li key ={c.id}>{c.content}</li>;
  });
};

export default CommentsList;
