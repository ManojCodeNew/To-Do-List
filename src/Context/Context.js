import React, { useState } from 'react'
import { createContext } from 'react';
const Global_data = createContext();

export default function Context({ children }) {
    const [history,setHistory]=useState("Empty")
    const data=[history]
    console.log("Context",data);
    return <Global_data.Provider value={{data,setHistory}}>
        {children}
    </Global_data.Provider>
}
export { Global_data };
