
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const SALT_ROUNDS = 10;

// User types
export interface User {
  id: number;
  email: string;
  full_name?: string;
  company_name?: string;
  membership_level: string;
}

export interface UserWithPassword extends User {
  password: string;
}

// Register a new user
export const registerUser = async (email: string, password: string, full_name?: string, company_name?: string): Promise<User | null> => {
  try {
    // Check if user already exists
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return null;
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    
    // Insert new user
    const result = await pool.query(
      'INSERT INTO users(email, password, full_name, company_name) VALUES($1, $2, $3, $4) RETURNING id, email, full_name, company_name, membership_level',
      [email, hashedPassword, full_name, company_name]
    );
    
    return result.rows[0];
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Login user
export const loginUser = async (email: string, password: string): Promise<{ user: User; token: string } | null> => {
  try {
    // Find user by email
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const user: UserWithPassword = result.rows[0];
    
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return null;
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    const { password: _, ...userWithoutPassword } = user;
    
    return {
      user: userWithoutPassword,
      token
    };
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Verify JWT token
export const verifyToken = (token: string): { userId: number; email: string } | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
  } catch (error) {
    return null;
  }
};

// Get user by ID
export const getUserById = async (userId: number): Promise<User | null> => {
  try {
    const result = await pool.query(
      'SELECT id, email, full_name, company_name, membership_level FROM users WHERE id = $1',
      [userId]
    );
    
    if (result.rows.length === 0) {
      return null;
    }
    
    return result.rows[0];
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw error;
  }
};
