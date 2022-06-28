/* File Taken from:
Title: React Crash Course For Beginners 2021
Author: Maximilian Schwarzmüller 
Date: 2021
Availability: https://github.com/academind/react-complete-guide-code/blob/zz-reactjs-summary/code/19-finished/src/components/layout/Layout.js
*/
import Navbar from './Navbar';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;