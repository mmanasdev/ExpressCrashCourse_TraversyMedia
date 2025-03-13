
let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
]

// @desc Get all posts
// @route GET /api/posts
// @access Public
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {   
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
    
}

// @desc Get a single post
// @route GET /api/posts/:id
// @access Public
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        // return res.status(404).json({ message: `Post with id ${id} not found` });
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);
    } 
    res.status(200).json(post);
}

// @desc Create a post
// @route POST /api/posts
// @access Private
export const createPost = (req, res, next) => {
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
}

// @desc Update a post
// @route PUT /api/posts/:id
// @access Private
export const updatePost =  (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);  
    if (!post) {
        // return res.status(404).json({ message: `Post with id ${id} not found` });   
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }
    if (!req.body.title) {
        // return res.status(400).json({ message: 'Please add a title' });
        const error = new Error('Please add a title');
        error.status = 400;
        return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
}

// @desc Delete a post
// @route DELETE /api/posts/:id
// @access Private
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}