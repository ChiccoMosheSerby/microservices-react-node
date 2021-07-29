const express = require("express");
const uuid = require("uuid");
const app = express();
app.use(express.json());
const axios = require("axios");

const cors = require("cors");
app.use(cors());

var isEmpty = require("../utils/isEmpty");

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = uuid.v4();
  const title = req.body.title;
  posts[id] = {
    id,
    title,
  };

  const x = await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("recived event", req.body.type);
  res.send({status:'OK'})
});

app.listen(4000, () => {
  console.log("posts service - listening on 4000");
});
