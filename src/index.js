import ReactDOM from "react-dom/client";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import App from "./App";
import Nav from "./Nav";
import "./index.css";
import Signin from "./Signin";
import Sign from "./Sign";

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/App" element={<Navigate replace to="/About" />} />
      <Route path="/About" element={<About />} />
      <Route path="/Nav" element={<Nav />}/>
      <Route path="/Footer" element={<Footer />} />
      <Route path="/App" element={<App />}/>
      <Route path="/Signin" element={<Signin />}/>
      <Route path="/Sign" element={<Sign />}/>
    </Routes>
  </Router>
);
