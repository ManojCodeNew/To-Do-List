import './App.css';
import Navbar from './component/navbar';
// import New from './component/new.js'
import Main from "./component/main.js";
function App() {
  return (
    <div >
      <Navbar/>
      <Main text="Enter Your Name With Id" Eg="Eg:ABC123"/>
      {/* <New/> */}
    </div>
  );
}

export default App;
