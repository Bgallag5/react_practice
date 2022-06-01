
export const loginReducer = (state, action) => {
    // console.log(state);
  switch (action.type) {
    default:
      return state;
    case "EMAIL_CHANGE":
      return { ...state, enteredEmail: action.payload, emailIsValid: action.payload.includes("@") };
      case "PASSWORD_CHANGE": 
      return {...state, enteredPassword: action.payload, passwordIsValid: action.payload.trim().length > 6}
  }
};

