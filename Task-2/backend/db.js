// backend/db.js
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dbadmin:Q1s3p3CLJWkUerRm@cluster0.lrrhepq.mongodb.net/socialmedia')

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Post schema
const postSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    contentImg: {
      type: String
    },
    // You can add more fields like tags, media URLs, etc.
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        text: {
          type: String,
          required: true
        },
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  });
  

  const User = mongoose.model('User', userSchema)
  const Post = mongoose.model('Post', postSchema);

module.exports = {
    User,
    Post
} 