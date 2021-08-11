import React from "react";
// import useCommentsUpdater from "../../hooks/useCommentsUpdater";

import CommentCreate from "../CommentCreate/CommentCreate";
import { PostCard } from "./Post.style";
import CommentsList from "../CommentsList/CommentsList";

const Post = ({ postData }) => {
  // const { comments, fetchAndUpdateComments } = useCommentsUpdater(postData.id);

  // useEffect(() => {
  //   fetchAndUpdateComments();
  // }, []);
  return (
    postData && (
      <PostCard>
        <p className="title">{postData.title}</p>
        <div className="center">
          <div className="lable">comments</div>
            <CommentsList comments={postData.comments} />
          <CommentCreate
            postId={postData.id}
            // fetchAndUpdateComments={() => fetchAndUpdateComments()}
          />
        </div>
      </PostCard>
    )
  );
};

export default Post;
