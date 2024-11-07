import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; 
import db from '../config/db.js'; 

// Signup controller
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    console.log("Validation error: Missing fields");
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Database error during signup:", err);
        return res.status(500).json({ message: 'Database error' });
      }

      // Retrieve the newly created user by ID
      const newUserId = result.insertId;
      const getUserSql = 'SELECT id, username FROM users WHERE id = ?';
      
      db.query(getUserSql, [newUserId], (err, results) => {
        if (err) {
          console.error("Database error retrieving new user:", err);
          return res.status(500).json({ message: 'Database error' });
        }
        
        const user = results[0];
        
        // Generate a JWT token with the user's ID and username
        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        // Respond with a message, token, and username
        res.json({ message: 'Signup successful', token, username: user.username });
      });
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Login controller
export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, results) => {
    if (err) {
      console.error('Database error during login:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Respond with a message, token, and username
    res.json({ message: 'Login successful', token, username: user.username });
  });
};

// Get User Data controller
export const getUserData = (req, res) => {
  // Get the token from the request header
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Retrieve user information from the database
    const sql = 'SELECT username FROM users WHERE id = ?';
    db.query(sql, [decoded.id], (err, results) => {
      if (err) {
        console.error('Database error while fetching user data:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Respond with the username
      res.json({ userId: user.id });
      res.json({ username: results[0].username });
    });
  } catch (error) {
    console.error("Invalid token:", error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
