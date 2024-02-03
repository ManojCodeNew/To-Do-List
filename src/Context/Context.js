import React, { useState } from 'react'
import { createContext } from 'react';
import Main from '../component/Main';
const Global_data = createContext();
console.log("Global data",Global_data);

export default function Context({ children }) {
    const [history,setHistory]=useState('Empty')
    return <Global_data.Provider value={{history,setHistory}}>
        {children}
    </Global_data.Provider>
}
export { Global_data };
