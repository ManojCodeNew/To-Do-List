import { createContext } from 'react'
import History from "./History";
const Global_Todo_history = createContext();
export default function data(props) {
    // let m=0;
    console.log("This is data", props);
    const todo_data="props";
    return(
        <>
        {/* <div>{props.data}</div> */}
        <Global_Todo_history.Provider value={todo_data}>
            <History/>
        </Global_Todo_history.Provider>
        </>
    )
}
export {Global_Todo_history};
// This is Processing part 
