import './App.css';
import Navbar from './component/navbar';
// import New from './component/new.js'
import Main from "./component/main.js";
import  History  from "./component/History.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div >
    <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Main text="Enter Your Name With Id" Eg="Eg:ABC123"/>}></Route>
        <Route path='/history' element={<History/>} >
        </Route>
      </Routes>
      {/* <New/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
