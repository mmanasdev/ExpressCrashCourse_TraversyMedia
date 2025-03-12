import express from 'express';
const router = express.Router();


let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
]



// GET all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {   
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
    
})

// GET a single post
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        // return res.status(404).json({ message: `Post with id ${id} not found` });
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);
    } 
    res.status(200).json(post);
})

// POST a new post
router.post('/', (req, res, next) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,   
        title: req.body.title
    }
    if (!newPost.title) {
        const error = new Error('Please add a title');
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
})  

// PUT update a post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);  
    if (!post) {
        return res.status(404).json({ message: `Post with id ${id} not found` });   
    }
    if (!req.body.title) {
        return res.status(400).json({ message: 'Please add a title' });
    }
    post.title = req.body.title;
    res.status(200).json(posts);
})  

// DELETE a post
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
})


export default router;