import React, { useState } from 'react'
import { createContext } from 'react';
const  GlobalData= createContext();

export default function Context({ children }) {
    const [history,setHistory]=useState("Empty")
    // History Stored in a array for easy to modify the datas
    const data=[history]
    
    const [clicked_item,set_Clicked_Item]=useState(null);
console.log("history clicked data",clicked_item);
    return <GlobalData.Provider value={{data,setHistory,set_Clicked_Item,clicked_item}}>
        {children}
    </GlobalData.Provider>
}
export { GlobalData };
