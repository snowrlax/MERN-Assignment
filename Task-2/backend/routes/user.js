// backend/routes/user.js
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const bcrypt = require("bcrypt");


const signupBody = zod.object({
    email: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {
    try {
        const { success } = signupBody.safeParse(req.body)
        if (!success) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const existingUser = await User.findOne({
            email: req.body.email
        })

        if (existingUser) {
            return res.status(411).json({
                message: "Email already taken/Incorrect inputs"
            })
        }

        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        })

        if (user) {
            const token = jwt.sign({
                userId: user._id
            }, JWT_SECRET);

            res.json({
                message: "User created successfully",
                token
            })
        }


    } catch (e) {
        return res.status(500).json({
            error: 'An error occurred while creating the user.',
            e
        });
    }

})

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const { success } = signinBody.safeParse(req.body)

        if (!success) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Incorrect password.' });
        }


        if (user) {
            const token = jwt.sign({
                userId: user._id
            }, JWT_SECRET);

            res.json({
                token: token
            })
            return;
        }

        res.status(411).json({
            message: "Error while logging in"
        })
    } catch (e) {
        return res.status(500).json({
            error: 'An error occurred while signing in.',
            e
        });
    }

})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})


router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    const { password, firstName, lastName } = req.body
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    const newDetails = {
        password,
        firstName,
        lastName
    }

    if (req.body.password) {
        // Hash the new password using bcrypt
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        newDetails.password = hashedPassword
        // // Update the user's password in the database
        // await User.findByIdAndUpdate(userId, { password: hashedPassword });
    }

    const updatedUser = await User.findByIdAndUpdate({
        _id: req.userId
    }, newDetails)

    res.json({
        message: "Updated successfully",
        updatedUser
    })
})

// search user by title
router.get("/search", async (req, res) => {
    const filter = req.query.filter || "";

    try {
        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            }, {
                lastName: {
                    "$regex": filter
                }
            }]
        })

        res.json({
            user: users.map(user => ({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    } catch (e) {
        res.status(501).json({
            msg: "error while searching user..."
        })
    }

})

// me endpoint
router.get('/me', async (req, res) => {
    // Get the token from the request headers or query parameters or cookies or wherever you store it
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is sent in the 'Authorization' header
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET);
  
      // Check if the user exists in the database
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // User is authenticated
      res.json({
        isLoggedIn: true,
        userDetails: {
          id: user._id,
          firstName: user.firstName,
          email: user.email,
        }
      });
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  });


module.exports = router;