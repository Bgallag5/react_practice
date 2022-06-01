import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";

import { loginReducer } from "../reducers/reducer";
import AppContext from "../store/app-context";

const Login = () => {

    const {loginHandler} = useContext(AppContext)
  const [formIsValid, setFormIsValid] = useState(false);

//   const [debouncedEmail, setDebouncedEmail] = useState();

    //login form state reducer
  const [loginState, loginDispatch] = useReducer(loginReducer, {
    enteredEmail: "",
    emailIsValid: undefined,
    enteredPassword: '',
    passwordIsValid: undefined
  });

//   //watch email input, set debounced value
//   useEffect(() => {
//     if (!loginState.enteredEmail) return;
//     //sets debounced value after 1 sec delay
//     const debouncedTimer = setTimeout(() => {
//       setDebouncedEmail(loginState.enteredEmail);
//     }, 1000);

//     //use effect cleanup function
//     //return a function that clears our timer (so a new timer is set everytime the effect runs)
//     return () => clearTimeout(debouncedTimer);
//   }, [loginState.enteredEmail]);

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

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginState.enteredEmail, loginState.enteredPassword);
  };

  //enable login button when inputs are valid
  useEffect(
    (e) => {
      console.log("CHECKING!");
    //   if (!loginState.enteredPassword) return;
      setFormIsValid(
        loginState.emailIsValid  && loginState.passwordIsValid
      );
    },
    [loginState.passwordIsValid, loginState.emailIsValid]
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
