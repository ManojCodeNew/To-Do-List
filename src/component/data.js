import { createContext,React } from 'react'
import History from "./History";
const Global_Todo_history = createContext();
export default function data(props) {
    // check
    console.log("This is data", props.data);
    const todo_data=data;
    return(
        <>
        <Global_Todo_history.Provider value={todo_data}>
            <History/>
        </Global_Todo_history.Provider>
        </>
    )
}
export {Global_Todo_history};
// This is Processing part 
