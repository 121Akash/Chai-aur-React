import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/Support";
import Notfound from "./components/Notfound";
import About from "./components/About";
import Labs from "./components/Labs";


 function App() {
  return (
    <div className="App">
    <nav>
      <ul>
          <li>
            <NavLink to= "/">Home</NavLink>
          </li>

          <li>
            <NavLink to= "/support">support</NavLink>
          </li>

          <li>
            <NavLink to= "/about">about</NavLink>
          </li>

          <li>
            <NavLink to= "/labs">labs </NavLink>
          </li>
      </ul>




    </nav>







        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/support" element ={<Support/>}></Route>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/labs" element ={<Labs/>}></Route>
          <Route path="*" element ={<Notfound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
