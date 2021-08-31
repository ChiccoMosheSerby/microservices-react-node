const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const constants = require("../constants");

const posts = {};

const handleEvent = (type, data) => {
  if (type === constants.POST_CREATED) {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === constants.COMMENT_CREATED) {
    const { id, content, status, postId } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === constants.COMMENT_UPDATED) {
    const { id, content, status, postId } = data;
    const post = posts[postId];
    const comment = post.comments.find((com) => {
      return com.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
