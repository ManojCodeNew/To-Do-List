import React from "react";
import { createContext } from "react";
const Global_Todo_history=createContext()
export default function Data(props){
    console.log("Data.js",props);
    return(
        <Global_Todo_history.Provider value={props.data} >
        {props.children}
        </Global_Todo_history.Provider>
    )
}
export {Global_Todo_history};
