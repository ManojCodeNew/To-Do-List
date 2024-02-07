import React, { useEffect } from "react";
import { useState } from "react";
export default function New(props) {
    
    // Storing individuals data
    const getitem = () => {
        const item = JSON.parse(localStorage.getItem(`${props.code}`))
        if (item) {
            // storing data after shutdown your pc 
            return JSON.parse(localStorage.getItem(`${props.code}`))
        }
        else {
            return []
        }

    }
    // This useState represent the current data of input box
    const [text, settext] = useState();

    // This useState store's a saved data
    const [savedtext, setsavedtext] = useState(getitem)

    // Storing Current user written text on a input box
    const Onchangetext = (event) => {
        //here event is variable for storing target.value data
        settext(event.target.value)
    }

    // Save Section
    const save = () => {
        setsavedtext([...savedtext, text])
    }

    // Remove Section
    const remove = (e) => {
        let data = e.target.value
        alert("Data Remove Successfully..")
        // the filter function used to filter the array using some condition
        const updatedsaveditem = savedtext.filter((item) => item !== data);
        setsavedtext(updatedsaveditem)
    }

    // Clear Function in textbox
    const clear = (e) => {
        settext('')
    }

    // set the saved text to the local storage
    useEffect(() => {
        localStorage.setItem(`${props.code}`, JSON.stringify(savedtext))
    }, [savedtext])

    return (
        <div className="bg-gray-900  drop-shadow-3xl shadow-2xl backdrop-blur-10 p-10 rounded-xl">
            <h3 className="text-white text-center font-serif font-extrabold text-2xl">TO DO LIST</h3>
            <div className=" m-5 text-center">

                {/* Lising Section */}
                <input value={text} onChange={Onchangetext} type="text" className="border-black m-3 p-3 rounded-full " placeholder="Enter Your Text..." />
                <button className="text-white bg-green-900 p-2 rounded-lg hover:rounded-full" onClick={save}>Save</button>
                <button className="bg-red-600 rounded-lg hover:rounded-full text-white p-2  ml-3" onClick={clear}>Clear</button>

                {/* List main heading */}
                <div className="text-left">
                    <h2 className="text-white  text-lg font-bold drop-shadow-xl bg-teal-700 p-2.5 rounded-full mt-5  inline-block ">{props.code}</h2>
                    <hr className="mt-3 border-gray-600 h-3" />
                </div>

                {/* Saving user created data */}
                {savedtext.map((saved, key) => (
                    <div className="text-white">
                        <div className="border-gray-100 border-solid border p-3 m-3 rounded-lg hover:rounded-full">
                            {/* Dispaly Saved Data */}
                            <h1 className="text-white p-1 text-left" >{saved}</h1>
                        </div>
                        {/* Remove data */}
                        <button onClick={remove} value={saved} className="bg-red-600 text-black hover:bg-white  p-2 rounded-lg hover:rounded-full ">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}