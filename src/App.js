import './App.css';
import Navbar from './component/navbar';
// import Data from './data.js'
import {Global_Todo_history} from './component/data.js'
import Main from "./component/main.js";
import  History  from "./component/History.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from 'react';
function App(props) {
const todo_history=useContext(Global_Todo_history)
  console.log("App props",todo_history);
  return (
    <div >
      {/* Routing */}
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main text="Enter Your Name With Id" Eg="Eg:ABC123"/>}></Route>
        {/* This is Processing part  */}
        <Route path='/history' element={<History/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
