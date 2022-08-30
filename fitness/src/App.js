
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import Class from "./components/Class";
import Nevbar from "./components/Nevbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Yoga from "./components/Yoga";
import Pricing from "./components/Pricing";

// import Link from "./components/Link";



function App() {
  return (
    <>
       <Router>
       <Nevbar/>
             
        <Routes>
        
        <Route path="/Class" element={<Class/>}/>
          <Route path="/About" element={<About/>}/>
          
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Yoga" element={<Yoga/>}/>

        </Routes>
      </Router>
       
    </>
  );
}

export default App;
