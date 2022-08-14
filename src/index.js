import ReactDOM from "react-dom";
import React from "react";
import App from "./App"
// import App1 from "./App1"
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Home />,
     <App />,
     <App1 />  
  </BrowserRouter>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>this is first pages</h1>
    </div>
  );
}

function App1(){
  return (
      <>
      <h1>helli vivek this is another component</h1>
      <h4>first you have to create component then you import  in index.js those file are direct with index.html</h4>
      </>

  )
}