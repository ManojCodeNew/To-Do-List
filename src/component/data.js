import React from "react";
import History from "./History";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";

export const Global_Todo_history=createContext()
export default function Data(props){
    console.log();
    const todo_data=props.data
    console.log("Data.js",todo_data);
    return(
        <Global_Todo_history.Provider value={props.data} >
        {props.children}
        <Routes>
        <Route path='/history' element={
                <History data={todo_data}/>
        } />
        </Routes>
        </Global_Todo_history.Provider>
    )
}
