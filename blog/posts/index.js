const express = require('express');
const uuid = require('uuid');
const app = express();
app.use(express.json());

var isEmpty = require('../utils/isEmpty');

const posts = {};

app.get('/posts', (req, res) => {
    if (isEmpty(posts)) {
        res.send({messege: 'no posts'});
    }
    res.send(posts);
})

app.post('/posts', (req, res) => {
    const id = uuid.v4();
    const title = req.body.title
    posts[id] = {
        id,
        title
    }
    res.status(201).send(posts[id]);
})

app.listen(4000, () => {
    console.log('posts service - listening on 4000');
})
