import React, { useEffect, useContext } from "react";
import New from "./new";
import { useState } from "react";
// Import createContext 
import { GlobalData } from "../Context/Context";


export default function Main(props) {
    const todo_history = useContext(GlobalData);

    // User To Do text
    const [code, setcode] = useState(todo_history.clicked_item)

    // UserIds operation's
    const getUserIds = () => {
        const userids = JSON.parse(localStorage.getItem('userids'))
        if (userids) {
            return JSON.parse(localStorage.getItem('userids'))
        }
        else {
            return []
        }
    }
    // participant names
    const [finalcode, setfinalcode] = useState(getUserIds())
    const onchangecode = (e) => {
        setcode(e.target.value)
    }

    const click_for_new = () => {
        setfinalcode([...finalcode, code])
    }

    // Data Sharing to the Context.js
    const History_data_for_sharing = () => {
        // Changing Context.js useState 
        todo_history.setHistory(finalcode);
    }
    History_data_for_sharing();

    // local storage for storing user name
    useEffect(() => {
        localStorage.setItem('userids', JSON.stringify(finalcode))
    }, [finalcode])

    return (
        <div>
            <div className="m-5 pl-3">
                <label className="font-bold text-2xl">{props.text}</label><hr />
                <input type="text" className="bg-white m-3 p-3 border-solid border-black border hover:shadow-2xl  rounded-lg" value={code} placeholder={props.Eg} onChange={onchangecode} />


                <button className="p-2 bg-green-700 text-white rounded-full" onClick={click_for_new}>New</button>

                {/* Clear section */}
                <button onClick={() => setcode('')} className="p-2 ml-2 bg-red-700 text-white rounded-full">Clear</button>

            </div>

            {/* This is Processing part  */}
            <p>{finalcode.includes(code) ? <New code={code} /> : <p className="text-center">Not Found !!!</p>}</p>
        </div>
    )
}