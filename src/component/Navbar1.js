import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const [visible, setvisible] = useState(false)

    // drop down clicking section 
    const dropdownClick = () => {
        // once click button then it shows a list one more click it not shows 
        if (visible === false) {
            setvisible(true)
        }
        else {
            setvisible(false)
        }
    }
    return (
        <>
            <div className="bg-blue-900  rounded-md pb-8  ">
                <NavLink to='/' className="p-3 text-white text-2xl font-bold  ">TO DO LIST
                    <button className="text-yellow-300 text-sm cursor-none">NEW</button></NavLink>
            </div>
            <h3 className="cursor-pointer text-black text-right flex justify-end pr-12" onClick={dropdownClick}>Drop</h3>

            <div className=" text-right text-white pb-4">
                {visible === true ?
                    <div className="dark:bg-slate-600 ml-5  mt-4 p-3  inline-grid rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mr-5">
                        <NavLink to='/' className="px-4 py-1  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Home</NavLink>
                        <NavLink to='/history' className="mt-4 px-2 py-1  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">History</NavLink>
                    </div> : ""}
            </div>



        </>
    )
}