import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";

import { loginReducer } from "../reducers/reducer";
import AppContext from "../store/app-context";
import LoginInput from "./UI/LoginInput";

const Login = () => {
  const { loginHandler } = useContext(AppContext);
  const [formIsValid, setFormIsValid] = useState(false);

  //   const [debouncedEmail, setDebouncedEmail] = useState();

  //login form state reducer
  const [loginState, loginDispatch] = useReducer(loginReducer, {
    enteredEmail: "",
    emailIsValid: undefined,
    enteredPassword: "",
    passwordIsValid: undefined,
  });

  const emailRef = useRef();
  const passwordRef = useRef();

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
    loginDispatch({ type: "EMAIL_CHANGE", payload: e.target.value });
  };
  //dispatch password change
  const passwordChangeHandler = (e) => {
    loginDispatch({ type: "PASSWORD_CHANGE", payload: e.target.value });
  };

  //user clicks login button
  const submitHandler = (e) => {
    e.preventDefault();
    //if valid form, setLoggedIn = true
    if (formIsValid) {
      loginHandler(loginState.enteredEmail, loginState.enteredPassword);
    }
    //if form feilds are invalid, focus those fields
    else if (!loginState.emailIsValid) {
      emailRef.current.focus();
    } else if (!loginState.passwordIsValid) {
      passwordRef.current.focus();
    }
  };

  //enable login button when inputs are valid
  useEffect(
    (e) => {
      console.log("CHECKING!");
      //   if (!loginState.enteredPassword) return;
      setFormIsValid(loginState.emailIsValid && loginState.passwordIsValid);
    },
    [loginState.passwordIsValid, loginState.emailIsValid]
  );

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <LoginInput
          ref={emailRef}
          id={"email"}
          changeHandler={emailChangeHandler}
          name="E-Mail"
          value={loginState.enteredEmail}
          isValid={loginState.emailIsValid}
        />
        <LoginInput
          ref={passwordRef}
          id={"password"}
          changeHandler={passwordChangeHandler}
          name="Password"
          value={loginState.enteredPassword}
          isValid={loginState.passwordIsValid}
        />
        <div className="actions">
          <Button type="submit" className="btn">
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
