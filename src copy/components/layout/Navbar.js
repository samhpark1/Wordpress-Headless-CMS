/* File Repurposed from:
Title: React Crash Course For Beginners 2021
Author: Maximilian Schwarzmüller 
Date: 2021
Availability: https://github.com/academind/react-complete-guide-code/blob/zz-reactjs-summary/code/19-finished/src/components/layout/MainNavigation.js
*/
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Edit Wordpress Site</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/edit">Edit Page</Link>
          </li>
          <li>
            <Link to="/allpages">All Pages</Link>
          </li>
          <li>
            <Link to="/updatephone">Update Phone Number</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
