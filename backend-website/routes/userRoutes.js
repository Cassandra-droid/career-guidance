import express from 'express';
import { createProfile, getProfile, updateProfile } from '../controllers/userController.js';

const router = express.Router();

// POST route to create a new profile
router.post('/profile', createProfile);

// GET route to fetch the profile
router.get('/profile/:username', getProfile);

// PUT route to update the profile
router.put('/profile/:username', updateProfile);

export default router;
