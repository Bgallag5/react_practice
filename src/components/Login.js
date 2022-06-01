import React, { useState, useEffect, useReducer } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";

import { loginReducer } from "../reducers/reducer";

const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [debouncedEmail, setDebouncedEmail] = useState();


  const [loginState, loginDispatch] = useReducer(loginReducer, {
    enteredEmail: "",
    emailIsValid: undefined,
    enteredPassword: '',
    passwordIsValid: undefined
  });

  //watch email input, set debounced value
  useEffect(() => {
    if (!loginState.enteredEmail) return;
    //sets debounced value after 1 sec delay
    const debouncedTimer = setTimeout(() => {
      setDebouncedEmail(loginState.enteredEmail);
    }, 1000);

    //use effect cleanup function
    //return a function that clears our timer (so a new timer is set everytime the effect runs)
    return () => clearTimeout(debouncedTimer);
  }, [loginState.enteredEmail]);

  //dispatch email change
  const emailChangeHandler = (e) => {
    // setEnteredEmail(event.target.value);
    loginDispatch({type: 'EMAIL_CHANGE', payload: e.target.value})
  };
    //dispatch password change
  const passwordChangeHandler = (e) => {
    // setEnteredPassword(e.target.value);
    loginDispatch({type: "PASSWORD_CHANGE", payload: e.target.value})
  };

//   //on input blur (aka un-focus) check valid 
//   const validateEmailHandler = () => {
//     loginDispatch({type: 'EMAIL_CHANGE', payload: loginState.enteredEmail})
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(loginState.enteredEmail, loginState.enteredPassword);
  };

  //enable login button when inputs are valid
  useEffect(
    (e) => {
      console.log("CHECKING!");
      if (!debouncedEmail || !loginState.enteredPassword) return;
      setFormIsValid(
        loginState.enteredPassword.trim().length > 6 && debouncedEmail.includes("@")
      );
    },
    [debouncedEmail, loginState.enteredPassword]
  );

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div className={`control ${loginState.emailIsValid === false ? "invalid" : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={loginState.enteredEmail}
            onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`control ${loginState.passwordIsValid === false ? "invalid" : ""}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginState.enteredPassword}
            onChange={passwordChangeHandler}
            // onBlur={validatePasswordHandler}
          />
        </div>
        <div className="actions">
          <Button type="submit" className="btn" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
