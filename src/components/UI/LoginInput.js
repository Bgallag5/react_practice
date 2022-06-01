import React, { forwardRef  } from "react";

//forwardRef so it can be accessed in parent component
const LoginInput = forwardRef((props, ref) => {
  const { value, name, changeHandler, isValid, id } = props;

  return (
    <div  className={`control ${isValid === false ? "invalid" : ""}`}>
      <label htmlFor={id}>{name}</label>
      <input ref={ref} type={id} id={id} value={value} onChange={changeHandler} />
    </div>
  );
});

export default LoginInput;