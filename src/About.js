import { Link } from "react-router-dom";
import React from "react";
import logo2 from "../src/logo192.png";
import Signin  from "./Signin";
import  Sign from "./Sign";
import "./index.css";

function About() {
  const imgstyle = {
    background: "red",
    height: "25",
  };

  return (
    <>
      <div className="container">
        {/* <Link className="btn btn-success" to="/App">click for app</Link>
            <Link className="btn btn-success" to="/Footer">click for footer</Link> */}
        <nav className="d-flex navbar-expand-md my-3">
          <div>
            {/* <img style={{height:50}} src="https://png.pngtree.com/element_pic/00/16/09/1157d4e27cda6d9.jpg" alt="images"></img> */}
            <img
              style={{ height: 50, borderRadius: 50 }}
              src="https://png.pngtree.com/element_pic/00/16/09/1157d4e27cda6d9.jpg"
              alt="images"
            ></img>
          </div>

          <div className="mx-auto">
            <ul className="d-flex">
              <li className="me-2">
                <h6>Home</h6>
              </li>
              <li className="me-2">
                <h6>About</h6>
              </li>
              <li className="me-2">
                <h6>Career</h6>
              </li>
              <li className="me-2">
                <h6>Contact us</h6>
              </li>
              <li className="me-2">
                <div className="">
                  <span className="ms-2 align-baseline text-warning">4</span>
                  <img
                    className=""
                    style={{ height: 25, borderRadius: 50 }}
                    src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-shopping-cart-icon-image_1131685.jpg"
                  ></img>
                </div>
              </li>
            </ul>
          </div>

          <div>
           
              <Link className=" btn btn-light mx-3" to="/Signin">Sign in</Link>
          
             <Link className=" btn btn-light mx-3" to="/Sign">Sign up</Link>
          </div>
        </nav>
      </div>
      <div className="container d-flex">
        <div className="row">
          <div className="left-side col-5 d-flex flex-column justify-content-center">
            <h4>hello this is left side part</h4>
            <p>this is testing part of any site</p>
            <button className="btn btn-light w-50 text-center">Buy now</button>
          </div>
          <div className="right-side col-7">
            <img style={{ width: 500 }} src="image/pizza.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
