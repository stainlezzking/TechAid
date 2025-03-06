"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    department: "",
  });

  return <AuthContext.Provider value={{ signupState: [signupData, setSignupData] }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
