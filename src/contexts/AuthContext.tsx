
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, verifyToken, getUserById } from '../services/auth';
import { useToast } from '@/components/ui/use-toast';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, confirmPassword: string, fullName?: string, companyName?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check if user is already logged in on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        const decoded = verifyToken(token);
        
        if (decoded && decoded.userId) {
          try {
            const userData = await getUserById(decoded.userId);
            if (userData) {
              setUser(userData);
            } else {
              localStorage.removeItem('token');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
            localStorage.removeItem('token');
          }
        } else {
          localStorage.removeItem('token');
        }
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        toast({
          title: "Error",
          description: data.message || "Login failed. Please check your credentials.",
          variant: "destructive",
        });
        return false;
      }
      
      localStorage.setItem('token', data.token);
      setUser(data.user);
      
      toast({
        title: "Success",
        description: "You have successfully logged in.",
      });
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (
    email: string, 
    password: string, 
    confirmPassword: string,
    fullName?: string,
    companyName?: string
  ): Promise<boolean> => {
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return false;
    }
    
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          password,
          full_name: fullName,
          company_name: companyName
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        toast({
          title: "Error",
          description: data.message || "Registration failed. Please try again.",
          variant: "destructive",
        });
        return false;
      }
      
      toast({
        title: "Success",
        description: "Account created successfully. You can now log in.",
      });
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
