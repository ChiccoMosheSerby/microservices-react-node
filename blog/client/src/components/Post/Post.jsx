import React, { useState } from "react";
import { PostCard } from './Post.style';

const Post = ({ postData }) => {
  const [commentContent, setCommentContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentContent("");
  };
  return (
    postData && (
      <PostCard>
        <p className="title">{postData.title}</p>
        <div className="center">
          <div className="lable">comments</div>
          {/* <div className="comments">
            {postData?.comments.map((c) => {
              return <div>{c}</div>;
            })}
          </div> */}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button type="submit">COMMENT</button>
        </form>
      </PostCard>
    )
  );
};

export default Post;
