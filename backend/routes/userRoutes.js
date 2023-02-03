import express from 'express';
import {authenticateUser, getUserProfile} from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js'



const router = express.Router();

// @desc Authenticate User
// @route POST /api/user/login
// @access public

router.post('/login', authenticateUser)

// @desc Authorize User
// @route POST /api/user/profile
// @access private

router.route('/profile').get(protect, getUserProfile)

export default router

