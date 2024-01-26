import React from "react";
import { NavLink } from "react-router-dom";
export default function navbar() {
    return (
        <>
            <div className="bg-blue-900  rounded-md ">
                <NavLink to='/' className="p-3 text-white text-2xl font-bold text-left pt-5 ">TO DO LIST
                    <button className="text-yellow-300 text-sm cursor-none">NEW</button></NavLink>
                    <div className="text-right text-white pb-4">
                <NavLink to='/' className="pr-10 ">Home</NavLink>
                <NavLink to='/history' className="m-2 pr-4">History</NavLink>
            </div>
            </div>

        </>
    )
}