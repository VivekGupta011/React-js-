import { useState } from "react";

function InputTesting(){
    // creation of useState
    const [name,setName]=useState("initial value here");

    let InputTest=()=>{
        setName("hello vivek");
    }

    return(
        <div>
            <p>hello this is {name}</p>
            <button onClick={InputTest()}>Click</button>
        </div>

    )

}

export default InputTesting;