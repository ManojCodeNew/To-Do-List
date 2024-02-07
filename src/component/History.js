import React from "react"
import { GlobalData } from "../Context/Context"
import { useContext } from "react";

import { NavLink } from "react-router-dom";


export default function History() {
    // Storing data using useContext
    const todo_history = useContext(GlobalData)
    const History_Container=[todo_history.data];
    console.log(History_Container);
    // console.log("Array conformation",Array.isArray(History_Container))
    const Click_handle=(e)=>{
    const Clicked_item_location=e.target.value;
    const clicked_data=History_Container[0][0][Clicked_item_location]
    todo_history.set_Clicked_Item(clicked_data)
   
    // return d
    }
    let fetchBatteryStatus = async () => {
        let battery = await navigator.getBattery();
        const decimalNumber = battery.level;
        const percentage = (decimalNumber * 100)+ '%';
    console.log("On Battery",percentage);
    }
fetchBatteryStatus();
    return (
        <div className="mt-5 ">
            <h2 className="pl-4">{"Manoj"} To Do History</h2>
            {/* For using one by one display */}
            {History_Container.flat().flat().map((item, key) =>
                <div className="text-xl p-1 mt-5 rounded-lg hover:bg-gray-200 hover:border-white cursor-pointer " >

                    {/* Passing */}
                <NavLink className="hover:font-semibold  " to='/' ><button onClick={Click_handle} value={key}>{item} </button></NavLink> 
                </div>
            )}
            {/* <svg class="w-[44px] h-[44px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg> */}
        </div>
    )
}
// This is Processing part
// History.js
