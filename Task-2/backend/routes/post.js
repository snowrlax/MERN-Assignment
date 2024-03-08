const express = require('express');

const router = express.Router();
const zod = require("zod");
const { Post, User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

// get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({}).populate('user')
        res.json({
            posts
        })
    } catch (e) {
        console.error('cannot get the posts from db')
        res.status(500).json({
            msg: 'cannot get the posts from db'
        })
    }
})

const newPostSchema = zod.object({
    content: zod.string(),
    contentImg: zod.string()
})
// Create a new post (only the ones that are authenticated will be able to create a post)
router.post('/create', authMiddleware, async (req, res) => {
    try {
        // validate the body with zod before inserting it into the db
        const { success } = newPostSchema.safeParse(req.body)

        if (!success) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const newPost = await Post.create({
            user: req.userId,
            content: req.body.content,
            contentImg: req.body.contentImg
        });

        res.status(201).json({
            msg: "post created successfully!",
            newPost
        });

    } catch (error) {

        res.status(500).json({ error: 'An error occurred while creating the post.' });
    }
});

const updatePostSchema = zod.object({
    content: zod.string().optional(),
    contentImg: zod.string().optional()
})

// get all of my posts
router.get('/myposts', authMiddleware, async (req, res) => {
    const userId = req.userId

    try{
        const myposts = await Post.find({
            user: userId 
        });

        if(!myposts)  {
            res.json({
                msg: "No posts found, create new Post!"
            })
        }
        res.json({
            myposts
        })
    } catch(e) {
        res.status(400).json({
            msg: "Cannot find posts.."
        })
    }
})

// Update an existing post
router.put('/myposts/:postId', authMiddleware, async (req, res) => {
    const { postId } = req.params;

    const userId = req.userId
    try {
        const post = await Post.findOne({
            _id: postId
        });

        // Check if the post exists
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        // Check if the user owns the post
        if (post.user.toString() !== userId) {
            return res.status(403).json({ error: 'You are not authorized to update this post.' });
        }

        // validate the body with zod before updating it into the db
        const { success } = updatePostSchema.safeParse(req.body)

        if (!success) {
            return res.status(411).json({
                message: "Incorrect inputs!"
            })
        }

        // User is authorized to update the post
        const updatedPost = await Post.findByIdAndUpdate({
            _id: postId
        }, req.body)


        res.json({
            msg: "Updated post successfully!",
            updatedPost
        });

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the post.' });
    }
});

// Delete a post
router.delete('/delete/:postId', authMiddleware, async (req, res) => {
    const { postId } = req.params;
    const userId = req.userId;
    try {
        const post = await Post.findOne({
            _id: postId
        });
        // Check if the post exists
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        // Check if the user owns the post
        if (post.user.toString() !== userId) {
            return res.status(403).json({ error: 'You are not authorized to delete this post.' });
        }
        const deletedPost = await Post.deleteOne({
            _id: postId
        });
        res.json({
            msg: "post deleted!",
            deletedPost
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the post.' });
    }
});

// like a post
router.post('/like/:postId', authMiddleware, async (req, res) => {
    const { postId } = req.params;
    const userId = req.userId;

    try {
        const post = await Post.findOne({
            _id: postId
        });

        // Check if the post exists
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        // Find the post by ID and update its likes array
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $addToSet: { likes: userId } }, // Add userId to likes array if not already present
            { new: true } // Return the updated document
        );

        res.status(200).json({
            msg: "liked post!",
            updatedPost
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while liking the post.' });
    }
});


module.exports = router;
