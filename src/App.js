import './App.css';
import Navbar from './component/navbar';
import Data from './component/data.js'
import {Global_Todo_history} from './component/data.js'
import Main from "./component/main.js";
import  History  from "./component/History.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(props) {
  console.log("App props",props);
  return (
    <div >
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main text="Enter Your Name With Id" Eg="Eg:ABC123"/>}></Route>

        {/* This is Processing part  */}
        <Route path='/history' element={<Data value={Global_Todo_history}><History/></Data>} >
        </Route>
      </Routes>
    </BrowserRouter>


    {/* <Data>
      <History/>
    </Data> */}
    </div>
  );
}

export default App;
