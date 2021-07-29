const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const axios = require("axios");

app.post("/events", (req, res) => {
  const events = req.body;
  axios.post("http://localhos:4000/events", events);
  axios.post("http://localhos:4001/events", events);
//   axios.post("http://localhos:4002/events", events);

  res.send({ status: "OK" });
}); 

app.listen(4005, () => { 
  console.log("events - listening on 4005");
});
