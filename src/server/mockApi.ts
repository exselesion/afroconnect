
import { registerUser, loginUser, User, UserWithPassword } from '../services/auth';

// In-memory database for development/demo
const users: UserWithPassword[] = [];

// Mock implementation of fetch API for auth endpoints
const originalFetch = window.fetch;

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input.url;
  
  // Handle login
  if (url === '/api/auth/login' && init?.method === 'POST') {
    const body = JSON.parse(init.body as string);
    const { email, password } = body;
    
    try {
      let result;
      
      // Check if any users exist in the mock DB
      if (users.length > 0) {
        // Find user in mock database
        const user = users.find(u => u.email === email);
        
        if (!user) {
          return new Response(
            JSON.stringify({ message: 'Invalid email or password' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
          );
        }
        
        // Check password (simplified for mock)
        if (user.password !== password) {
          return new Response(
            JSON.stringify({ message: 'Invalid email or password' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
          );
        }
        
        const { password: _, ...userWithoutPassword } = user;
        result = {
          user: userWithoutPassword,
          token: `mock-token-${user.id}`
        };
      } else {
        // Use the actual auth service
        result = await loginUser(email, password);
        
        if (!result) {
          return new Response(
            JSON.stringify({ message: 'Invalid email or password' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
          );
        }
      }
      
      return new Response(
        JSON.stringify(result),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Mock login error:', error);
      return new Response(
        JSON.stringify({ message: 'Internal server error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  
  // Handle registration
  if (url === '/api/auth/register' && init?.method === 'POST') {
    const body = JSON.parse(init.body as string);
    const { email, password, full_name, company_name } = body;
    
    try {
      // Check if email already exists in mock database
      if (users.some(u => u.email === email)) {
        return new Response(
          JSON.stringify({ message: 'User with this email already exists' }),
          { status: 409, headers: { 'Content-Type': 'application/json' } }
        );
      }
      
      // Create new user
      const newUser = {
        id: users.length + 1,
        email,
        password, // In a real app, this would be hashed
        full_name,
        company_name,
        membership_level: 'standard'
      };
      
      users.push(newUser);
      
      const { password: _, ...userWithoutPassword } = newUser;
      
      return new Response(
        JSON.stringify({ 
          message: 'User registered successfully', 
          user: userWithoutPassword 
        }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Mock register error:', error);
      return new Response(
        JSON.stringify({ message: 'Internal server error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  
  // Pass through to original fetch for other requests
  return originalFetch(input, init);
};

// Add a test user
users.push({
  id: 1,
  email: 'test@example.com',
  password: 'password123',
  full_name: 'Test User',
  company_name: 'Test Company',
  membership_level: 'premium'
});

console.log('Mock API initialized with test user: test@example.com / password123');
