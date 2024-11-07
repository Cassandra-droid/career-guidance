import express from 'express';
import { signup, login, getUserData } from '../controllers/authController.js'; 

const router = express.Router();

// Signup route
router.post('/signup', signup); 

// Login route
router.post('/login', login); 

// Route to get user data
router.get('/user', getUserData);

export default router; // Use export default to export the router
