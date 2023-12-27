import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Service from "./Components/Service";
import Contact from './Components/Contact'
import OnlineSell from './Components/OnlineSell'
import { Route, Routes } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='onlinesellart' element={<OnlineSell/>} />
      </Routes>

    </div>
  );
}

export default App;
