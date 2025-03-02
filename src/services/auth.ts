
// This is a simple mock auth service for demonstration purposes
// In a real application, this would connect to a backend service

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

// Mock user data
const mockUsers = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin',
    role: 'admin' as const,
  },
];

export const authService = {
  login: (email: string, password: string): User | null => {
    const user = mockUsers.find(
      (u) => (u.email === email || u.username === email) && u.password === password
    );
    
    if (user) {
      // Store user in localStorage for session persistence
      const userData: User = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      };
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return userData;
    }
    
    return null;
  },

  logout: () => {
    localStorage.removeItem('currentUser');
  },

  getCurrentUser: (): User | null => {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  },

  isLoggedIn: (): boolean => {
    return !!localStorage.getItem('currentUser');
  },
};
