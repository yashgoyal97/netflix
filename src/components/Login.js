import React, { useState } from "react";
import AppHeader from "./AppHeader";
import { LOGIN_BG } from "../utils/images";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div>
      <div className="absolute bg-gradient-to-b from-black w-full z-10 px-8">
        <AppHeader />
      </div>
      <img className="absolute min-h-screen min-w-full" src={LOGIN_BG} />
      <div className="absolute w-1/3 mx-auto right-0 left-0 top-[15%]">
        {isSignInForm ? (
          <LoginForm
            navigateToSignUpForm={() => {
              setIsSignInForm(!isSignInForm);
            }}
          />
        ) : (
          <RegisterForm
            navigateToSignInForm={() => {
              setIsSignInForm(!isSignInForm);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
