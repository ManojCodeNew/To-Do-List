import React, { useEffect } from "react";
import { useState } from "react";
// import Main from './main'
export default function New(props) {
    console.log(props.code);
    // Storing individuals data
    const getitem=()=>{
        const item=JSON.parse(localStorage.getItem(`${props.code}`))
        if (item) {
            return JSON.parse(localStorage.getItem(`${props.code}`))
        }
        else{
            return []
        }
        
    }
    const [text, settext] = useState("props.code");
    const [savedtext, setsavedtext] = useState(getitem())
// setsavedtext(localStorage.getItem('item'));
// console.log(savedtext);

    const Onchangetext = (event) => {//here event is variable for storing target.value data
        settext(event.target.value)
    }
    const save = () => {
        setsavedtext([...savedtext, text])
    }
    const remove=(e)=>{
        let data=e.target.value
        
    //     // the filter function used to filter the array using some condition
    const updatedsaveditem = savedtext.filter((item) => item !== data);

        setsavedtext(updatedsaveditem)
        console.log(data);
    console.log(e.target.value);
    }
    const clear=(e)=>{
        settext('')
    }
    useEffect (()=>{
        localStorage.setItem(`${props.code}`,JSON.stringify(savedtext))
    },[savedtext])

    return (
        <div className="bg-black p-10 rounded-xl">
            <h3 className="text-white text-center font-serif font-extrabold text-2xl">TO DO LIST</h3>
            <div className=" m-5 text-center">
            <input value={text} onChange={Onchangetext} type="text" className="border-black m-3 p-3 rounded-full " placeholder="Enter Your Text..." />
            <button className="text-white bg-green-900 p-2 rounded-lg" onClick={save}>Save</button>
            <button className="bg-red-600 text-white p-2 rounded-lg ml-3" onClick={clear}>Clear</button>
            </div>
            {savedtext.map((saved,key) => (
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