import { BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';

import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<AboutUs />} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
