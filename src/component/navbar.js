import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Dropdownicon from './ddicon.png'
export default function Navbar() {
    const [visible, setvisible] = useState(false)

    // drop down clicking section 
    const dropdownClick = () => {
        // once click button then it shows a list one more click it not shows 
        if (visible == false) {
            setvisible(true)
        }
        else {
            setvisible(false)
        }
    }
    return (
        <>
            <div className="bg-blue-900  rounded-md pb-8 ">
                <NavLink to='/' className="p-3 text-white text-2xl font-bold text-left pt-5 ">TO DO LIST
                    <button className="text-yellow-300 text-sm cursor-none">NEW</button></NavLink>

            </div>
            <div className=" text-right text-white pb-4">
                {visible === true ?
                    <div className="dark:bg-slate-600 ml-5 inline-grid mt-4 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <NavLink to='/' className="px-4 py-1  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Home</NavLink>
                        <NavLink to='/history' className="mt-4 px-2 py-1  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">History</NavLink>
                    </div> : ""}
            </div>



        </>
    )
}