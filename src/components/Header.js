
import React from 'react';

// import Navigation from './Navigation';
// import classes from './MainHeader.module.css';

const Header = (props) => {
    console.log(props.isAuthenticated);
  return (
    <header className="main-header">
      <h1>A Typical Page</h1>
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
      <nav className="nav">
      <ul>
        {props.isAuthenticated && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isAuthenticated && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isAuthenticated && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    </header>
  );
};

export default Header;
