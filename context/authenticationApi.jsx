"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// const newUserDataType = {
//     data: ,
//     qrcodeURL:
// }
export function AuthProvider({ children }) {
  const defaultSignUpFormValues = {
    fullname: "",
    email: "",
    password: "",
    department: "",
  };
  const defaultsLoginForValues = {
    email: "",
    password: "",
  };
  const [signupData, setSignupData] = useState(defaultSignUpFormValues);
  const [loginSData, setLoginData] = useState(defaultsLoginForValues);
  const [isNewUser, setisNewUser] = useState(true);
  const [UserData, setUserData] = useState(null);
  // i want to reset the context after being authenticated, so they can''t navigate back
  const clearUserStateAfterAuth = function () {
    setSignupData(defaultSignUpFormValues);
    setisNewUser(true);
    setUserData(null);
  };
  return (
    <AuthContext.Provider
      value={{
        isNewUserState: [isNewUser, setisNewUser],
        signupState: [signupData, setSignupData],
        loginState: [loginSData, setLoginData],
        UserDataState: [UserData, setUserData],
        clearContext: clearUserStateAfterAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
