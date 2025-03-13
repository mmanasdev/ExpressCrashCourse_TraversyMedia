import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postControllers.js';

const router = express.Router();


// GET all posts
router.get('/', getPosts);

// GET a single post
router.get('/:id', getPost);

// POST a new post
router.post('/', createPost);

// PUT update a post
router.put('/:id', updatePost);

// DELETE a post
router.delete('/:id', deletePost);


export default router;