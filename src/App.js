import './App.css';
import Navbar from './component/navbar';
// import Data from './data.js'
import Data, { Global_Todo_history } from './component/data.js'
import Main from "./component/main.js";
import History from "./component/History.js";
import { Route, Routes } from "react-router-dom";
import { useContext } from 'react';
function App(props) {
  const todo_history = useContext(Global_Todo_history)
  console.log("App props", todo_history);
  return (
    <div >
      {/* Routing */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Main text="Enter Your Name With Id" Eg="Eg:ABC123" />}></Route>
          {/* This is Processing part  */}
          {/* <Route path='/history/:data' element={
            <Data>
                <History data={useContext(Global_Todo_history)}/>
            </Data>
          } /> */}
        </Routes>
    </div>
  );
}

export default App;
