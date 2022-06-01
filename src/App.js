import React, { useState, useEffect, useContext } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

import AppContext from "./store/app-context";

function App() {
  const {isLoggedIn} = useContext(AppContext)

  return (
    <React.Fragment>
      <Header />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
