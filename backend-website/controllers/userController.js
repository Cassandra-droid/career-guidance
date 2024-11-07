import User from '../models/User.js';

// Create Profile
export const createProfile = async (req, res) => {
  const { username, name, gender, skills, interests, experience, education, dob, age, location } = req.body;

  try {
    const profileData = { username, name, gender, skills, interests, experience, education, dob, age, location };
    const result = await User.createProfile(profileData);
    res.status(201).json({ message: 'Profile created successfully', data: result });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: 'Error creating profile', error });
  }
};

// Get Profile by Username
export const getProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const profile = await User.findProfileByUsername(username);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};

// Update Profile by Username
export const updateProfile = async (req, res) => {
  const { username } = req.params;
  const profileData = req.body;

  try {
    const result = await User.updateProfile(username, profileData);
    res.status(200).json({ message: 'Profile updated successfully', data: result });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
