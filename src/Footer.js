import { useState } from "react";




function Footer(){
    const [a,setName]=useState("vivek gupta");
    const changeName=()=>{
        console.log("clicked");
        setName("hello")
        // return a;
    };

    return (
        <div className="main-div">
            <div> Hello,{a}</div>
            <button onClick={changeName}> click Me</button>
        </div>
    );
}

export default Footer;