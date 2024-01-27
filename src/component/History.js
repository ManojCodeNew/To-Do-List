import React from "react"
import data from "./data";
// import { useContext } from "react";
export default function History(){
    // console.log(data());
    return(
<div className="text-3xl">{data()}
    I am a history of users
</div>
    )
}