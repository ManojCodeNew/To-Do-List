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

    // useRef
    // const useref=useRef();
    // const recentfileclick=(e)=>{
    //     const clicked_data=useref.current.textContent;
    //     // console.log(clicked_data);
    //     setcode(clicked_data)
    //     console.log(e);
    // }


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
            <div className="p-2 rounded-lg mt-5">
            <h1 className=" pl-2 m-2 bg-red-900 px-2 py-2  inline-block rounded-md text- ">Recent Notes</h1>
            <div>
            {finalcode.map((item,key)=><p className="m-2 p-1 rounded-lg hover:text-black hover:font-bold hover:bg-gray-400 border border-solid border-gray-400 text-black inline-block ">{item}</p>)}

            </div>
            </div>
        </div>

    )
}