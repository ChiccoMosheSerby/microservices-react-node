const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const constants = require("../constants");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const {content} = req.body

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({
    id: commentId,
    content,
    status: "panding",
  });

  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: constants.COMMENT_CREATED,
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status: "panding",
    },
  });

  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  //find the specific comment in postId and update this comment status
  if (type === constants.COMMENT_MODERATED) {
    const { id, postId, status } = data;
    const content = data.content



    const comments = commentsByPostId[postId] || [];
    const comment = comments.find((com) => {
      return com.id === id;
    });
    comment.status = status;
    await axios.post("http://localhost:4005/events", {
      type: constants.COMMENT_UPDATED,
      data: {
        id,
        content,
        status,
        postId,
      },
    });
  }
  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
