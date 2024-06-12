import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { auth } from '../firebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

interface AuthContextProps {
  currentUser: firebase.User | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  sendEmailVerification: () => Promise<void>;
  isEmailVerified: () => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log('Auth State Changed:', user);
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string): Promise<void> => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    if (userCredential.user) {
      await userCredential.user.sendEmailVerification();
      await auth.signOut(); // Sign out the user after registration
    }
  };


  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
  };

  const sendEmailVerification = () => {
    if (auth.currentUser) {
      return auth.currentUser.sendEmailVerification();
    } else {
      return Promise.reject(new Error('No user is currently signed in'));
    }
  };

  const isEmailVerified = () => {
    return currentUser ? currentUser.emailVerified : false;
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout, resetPassword, sendEmailVerification, isEmailVerified }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
