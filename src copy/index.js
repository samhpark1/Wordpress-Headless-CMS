/* File Taken from:
Title: React Crash Course For Beginners 2021
Author: Maximilian Schwarzmüller 
Date: 2021
Availability: https://github.com/academind/react-complete-guide-code/blob/zz-reactjs-summary/code/19-finished/src/index.js
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
