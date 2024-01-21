import React from "react";
import { useState } from "react";
// import Main from './main'
export default function New() {
    const [text, settext] = useState("Hai Developer!!!");
    const [savedtext, setsavedtext] = useState([])
    const Onchangetext = (event) => {//here event is variable for storing target.value data
        settext(event.target.value)
    }
    const save = () => {
        setsavedtext([...savedtext, text])
    }
    const remove=(e)=>{
        // the filter function used to filter the array using some condition
        const updatedsaveditem=savedtext.filter((item)=>!item.includes(e.target.value))
        setsavedtext(updatedsaveditem)
    }
    const clear=(e)=>{
        settext('')
    }

    return (
        <div className="bg-black p-7">
            <input value={text} onChange={Onchangetext} type="text" className="border-black m-3 p-3 rounded-full " placeholder="Enter Your Text..." />
            <button className="text-white bg-green-900 p-2 rounded-lg" onClick={save}>Save</button>
            <button className="bg-red-600 text-white p-2 rounded-lg ml-3" onClick={clear}>Clear</button>
            {savedtext.map((saved) => (
                <div >
                <div className="border-gray-100 border-solid border p-3 m-3 rounded-md">
                    <h1 className="text-white p-1" >{saved}</h1>
                </div>
                <button onClick={remove} value={saved} className="bg-red-600 text-black hover:bg-white  p-2 rounded-lg ">Remove</button>
                </div>
            ))}
        </div>
    )
}