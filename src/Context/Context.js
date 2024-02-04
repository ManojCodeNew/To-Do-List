import React, { useState } from 'react'
import { createContext } from 'react';
const Global_data = createContext();

export default function Context({ children }) {
    const [history,setHistory]=useState("Empty")
    const data=[history]
    const initial_clicked_item=data.length
    const [clicked_item,set_Clicked_Item]=useState(initial_clicked_item);
    return <Global_data.Provider value={{data,setHistory,set_Clicked_Item,clicked_item}}>
        {children}
    </Global_data.Provider>
}
export { Global_data };
