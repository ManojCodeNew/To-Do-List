import React, { useEffect } from "react";
import New from "./new";
import { useState } from "react";

// ***
export default function Main(props) {
    const [code, setcode] = useState()
    const getUserIds=()=>{
        const userids=JSON.parse(localStorage.getItem('userids'))
        if (userids) {
            return JSON.parse(localStorage.getItem('userids'))
        }
        else{
            return []
        }
    }
    // participant names
    const [finalcode, setfinalcode] = useState(getUserIds())
    const onchangecode = (e) => {
        setcode(e.target.value)
    }
    const click_for_new=()=>{
        setfinalcode([...finalcode,code])
        console.log(finalcode);
    }
    
    // local storage for storing user name
    useEffect(()=>{
    localStorage.setItem('userids',JSON.stringify(finalcode))
    },[finalcode])
    return (
        <div>
            <div className="m-5 pl-3">
                <label className="font-bold text-2xl">{props.text}</label><hr />
                <input type="text" className="bg-white m-3 p-3 border-solid border-black border rounded-lg" value={code} placeholder={props.Eg} onChange={onchangecode} />
                <button className="p-2 bg-green-700 text-white rounded-full" onClick={click_for_new}>New</button>

            </div>
            {/* <p className="text-center">{code==="1"?<New code={code} />:"Please Enter Your Id"} </p> */}
            {/* {code===finalcode?<New code={code} />:"Please Enter Your Id"} */}
            {/* {(finalcode.filter((item)=>item===code))?<New/>:"Sorry Found"} */}


            {/* this includes function  */}
            <p>{finalcode.includes(code)?<New code={code}/>:<p className="text-center">Not Found !!!</p>}</p>
            {finalcode.map((item)=><p>{item}</p>)}
        </div>

    )
}