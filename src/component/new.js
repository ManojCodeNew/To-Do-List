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
        // the filter function used to filter the array using some condition
        const updatedsaveditem = savedtext.filter((item) => item !== data);
        setsavedtext(updatedsaveditem)
    }

    // Clear Function in textbox
    const clear = (e) => {
        settext('')
    }

    // set the saved text to the local storage
    // eslint-disable-next-line 
    useEffect(() => {
        localStorage.setItem(`${props.code}`, JSON.stringify(savedtext))
        // eslint-disable-next-line
    }, [savedtext])

    return (
        <div className="bg-gray-900  drop-shadow-3xl shadow-2xl backdrop-blur-10 p-10 rounded-xl">
            <h3 className="text-white text-center font-serif font-extrabold text-2xl">TO DO LIST</h3>
            <div className=" mt-10 text-center">

                {/* Lising Section */}
                <textarea value={text} onChange={Onchangetext} type="text" cols='90' rows='10' className="border-white  text-gray-300 ml-5 p-1  rounded-md hover:shadow-lg hover:shadow-cyan-100/50 " placeholder="Enter Your Text..." style={{ backgroundColor: 'transparent' }}/>
                <button className="text-white bg-green-900 p-2 rounded-lg hover:rounded-full mt-5  " onClick={save}>Save</button>
                <button className="bg-red-600 rounded-lg hover:rounded-full text-white p-2  ml-3  " onClick={clear}>Clear</button>

                {/* List main heading */}
                <div className="text-left">
                    <h2 className="text-white  text-lg font-bold drop-shadow-xl bg-teal-700 p-2.5 rounded-full mt-5  inline-block ">{props.code}</h2>
                    <hr className="mt-3 border-gray-600 h-3" />
                </div>

                {/* Saving user created data */}
                {savedtext.map((saved, key) => (
                    <div className="text-white">
                        <div className="border-gray-100 border-solid border p-3 m-3 rounded-lg ">
                            {/* Dispaly Saved Data */}
                            <h1 className="text-white p-1 text-left" >{saved}</h1>
                        </div>
                        {/* Remove data */}
                        <button onClick={remove} value={saved} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}