import express from 'express';
import {authenticateUser, getUserProfile, registerUser} from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js'



const router = express.Router();

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.route('/').post(registerUser)

// @desc Authenticate User
// @route POST /api/user/login
// @access public
router.post('/login', authenticateUser)

// @desc Authorize User
// @route POST /api/user/profile
// @access private
router.route('/profile').get(protect, getUserProfile)

export default router

