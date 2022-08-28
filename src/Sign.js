// export function Sign() {
//   return <h1>this is Signup pages</h1>;
// }

// export function Buy() {
//   return <h1>this is Buy pages</h1>;
// }

// export function Sell() {
//   return <h1>this is sell pages</h1>;
// }

// function Signdefault(){
//     return <h1>This is Default pages</h1>;
// }
// export default Signdefault;
import { useState } from "react";

 function Sign(){
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
export default Sign;