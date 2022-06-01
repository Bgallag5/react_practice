
import React, {useContext} from 'react';

// import Navigation from './Navigation';
// import classes from './MainHeader.module.css';

import AppContext from '../store/app-context';

const Header = () => {
    const {isLoggedIn, logoutHandler} = useContext(AppContext)

  return (
    <header className="main-header">
      <h1>A Typical Page</h1>
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
      <nav className="nav">
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    </header>
  );
};

export default Header;
