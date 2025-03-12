const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
    //  res.send('<h1>Hello World</h1>');
    // res.send({ message: 'hello World' } )
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
]

// GET all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
})

// GET a single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.filter((post) => post.id === id);
    res.json(post);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
