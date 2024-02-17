import React, { createContext, useState, useContext, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check if user is logged in on component mount
  useEffect(() => {
    // Your logic to check if user is logged in (e.g., check localStorage, Firebase Auth state, etc.)
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
