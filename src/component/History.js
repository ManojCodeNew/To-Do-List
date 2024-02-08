import React from "react"
import { GlobalData } from "../Context/Context"
import { useContext } from "react";
import { NavLink } from "react-router-dom";


export default function History() {
    // Storing data using useContext
    const todo_history = useContext(GlobalData)
    const History_Container = [todo_history.data];

    // History data clicking operation
    const Click_handle = (e) => {
        const Clicked_item_location = e.target.value;
        const clicked_data = History_Container[0][0][Clicked_item_location]
        todo_history.set_Clicked_Item(clicked_data)
    }
    
    return (
        <div className="mt-5 ">
            <h2 className="pl-4">To Do History</h2>
            {/* One by one display */}
            {History_Container.flat().flat().map((item, key) =>
                <div className="text-xl p-1 mt-5 rounded-lg hover:bg-gray-200 hover:border-white cursor-pointer " >

                    {/* Passing to home page */}
                    <NavLink className="hover:font-semibold  " to='/' ><button onClick={Click_handle} value={key}>{item} </button></NavLink>
                </div>
            )}
        </div>
    )
}

