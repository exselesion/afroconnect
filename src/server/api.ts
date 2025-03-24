
import express from 'express';
import { registerUser, loginUser } from '../services/auth';

const app = express();
app.use(express.json());

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, full_name, company_name } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const user = await registerUser(email, password, full_name, company_name);
    
    if (!user) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }
    
    return res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const result = await loginUser(email, password);
    
    if (!result) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// For development purposes, we'll simulate API in the frontend
// In a real production app, you would need a proper backend server
console.log('API routes initialized');
