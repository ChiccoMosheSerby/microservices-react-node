const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const constants = require("../constants");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === constants.COMMENT_CREATED) {

    const status = data.content.includes("qqq") ? "rejected" : "approved";
    await axios.post("http://localhost:4005/events", {
      type: constants.COMMENT_MODERATED,
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
