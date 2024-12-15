import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from './About';
import Contact from './Contacts';
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";

function App(){
  return (
  <div>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contacts" element={<Contact />}></Route>
      </Routes>
    <Footer></Footer>
    </div>
);
}

export default App;
