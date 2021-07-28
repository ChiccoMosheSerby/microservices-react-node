const express = require("express");
const uuid = require("uuid");
const app = express();
app.use(express.json());

const commentsByPostId = {};

// get comments by post id
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// add comment by post id
app.post("/posts/:id/comments", (req, res) => {
  const commentId = uuid.v4();
  const comentedPostId = req.params.id;
  const { content } = req.body;

  const comments = commentsByPostId[comentedPostId] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[comentedPostId] = comments;

  res.send({
    postID: comentedPostId,
    commentID:
      commentsByPostId[comentedPostId][
        commentsByPostId[comentedPostId].length - 1
      ].id,
    commentContent:
      commentsByPostId[comentedPostId][
        commentsByPostId[comentedPostId].length - 1
      ].content,
  });
});

app.listen(4001, () => {
  console.log("comments service - listening on 4001");
});
