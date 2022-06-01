import React, { useEffect, useState } from "react";

//create the app context provider
const AppContext = React.createContext();

//wrap the provider in a component with all our global variables and functions
export const AppContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //GLOBAL VARIABLES//
  const loginHandler = (email, password) => {
    // We should of course check email and password - But it's just a dummy/ demo anyways

    //set LocalStorage variable
    localStorage.setItem("loggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };
  //GLOBAL VARIABLES//

  //if user was previously logged in, setIsLoggedIn(true)
  useEffect(() => {
    const prevAuth = JSON.parse(localStorage.getItem("loggedIn"));
    console.log(prevAuth);

    prevAuth && setIsLoggedIn(true);
  }, []);

  const globalVars = {
      isLoggedIn,
      setIsLoggedIn,
      logoutHandler,
      loginHandler
  };

  return <AppContext.Provider value={globalVars}>{props.children}</AppContext.Provider>;
};

export default AppContext;