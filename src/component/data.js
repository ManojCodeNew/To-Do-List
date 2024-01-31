import { createContext, React } from 'react'
import { useState } from 'react';
import History from "./History";
const Global_Todo_history = createContext();
export default function data(props) {
    // check
    console.log("This is data", props.children);
    const todo_data = props.data ;
    // console.log("To do Data", todo_data,props.children);
    return (
        <>
            {/* Creating  useContext */}
            <Global_Todo_history.Provider value={todo_data}>
                {/* <History /> */}
                {props.children}
                                {/* Function calling using another component */}
                {/* <button className="text-red-800" onClick={props.data}>Hello</button> */}
            </Global_Todo_history.Provider>
        </>
    )
}
export { Global_Todo_history };
// This is Processing part 
