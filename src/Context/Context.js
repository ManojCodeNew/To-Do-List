import React from 'react'
import { createContext } from 'react';
import Main from '../component/Main';
const Global_data = createContext();
console.log("Global data",Global_data);

export default function Context({ children }) {
    return <Global_data.Provider value={"Handle_function"}>
        {children}
    </Global_data.Provider>
}
export { Global_data };
