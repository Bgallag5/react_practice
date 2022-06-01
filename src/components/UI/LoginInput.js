import React from 'react'

{/* <LoginInput changeHandler={emailChangeHandler} name='E-Mail' value={loginState.enteredEmail} isValid={loginState.emailIsValid}  /> */}


export default function LoginInput(props) {
    const {value, name, changeHandler, isValid, id } = props
  return (
    <div className={`control ${isValid === false ? "invalid" : ""}`}>
    <label htmlFor={id}>{name}</label>
    <input
      type={id}
      id={id}
      value={value}
      onChange={changeHandler}
    />
  </div>
  )
}



{/* <div className={`control ${loginState.emailIsValid === false ? "invalid" : ""}`}>
<label htmlFor="email">E-Mail</label>
<input
  type="email"
  id="email"
  value={loginState.enteredEmail}
  onChange={emailChangeHandler}
/>
</div> */}
