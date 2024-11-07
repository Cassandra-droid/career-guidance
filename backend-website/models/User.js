import db from '../config/db.js';

const User = {
  // Create Profile by username
  createProfile: (profileData) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO profile (username, name, gender, skills, interests, experience, education, dob, age, location) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const { username, name, gender, skills, interests, experience, education, dob, age, location } = profileData;

      db.query(sql, [username, name, gender, skills, interests, experience, education, dob, age, location], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  // Find Profile by username
  findProfileByUsername: (username) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM profile WHERE username = ?`;
      db.query(sql, [username], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]); // Return the first profile found
      });
    });
  },

  // Update Profile by username
  updateProfile: (username, profileData) => {
    return new Promise((resolve, reject) => {
      const { name, gender, skills, interests, experience, education, dob, age, location } = profileData;
      const sql = `UPDATE profile 
                   SET name = ?, gender = ?, skills = ?, interests = ?, experience = ?, education = ?, dob = ?, age = ?, location = ? 
                   WHERE username = ?`;

      db.query(sql, [name, gender, skills, interests, experience, education, dob, age, location, username], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
};

export default User;
