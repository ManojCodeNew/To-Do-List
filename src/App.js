import './App.css';
import NavBar from './component/Navbar1.js';
import Main from './component/Main1.js';
import History from "./component/History.js";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div >
      {/* Routing */}
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main text="Enter List Title" Eg="Eg:ABC123" />}></Route>
          {/* This is Processing part  */}
          <Route path='/history' element={<History />} />
        </Routes>
    </div>
  );
}

export default App;
