import {useState} from "react";

function Signin(){
    const [name,setName]=useState("vivek");
    const changeName=()=>{
        setName("vivek Gupta");
    };
    return (
        <div>
            <p>My name is {name}</p>
            <button onClick={changeName}>click me</button>
        </div>
    )
}


export default Signin;