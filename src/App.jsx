import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Components/AboutPage/AboutPage';
import Connections from './Components/Connections/Connections';
import HumanLibrary from './Components/HumanLibrary/HumanLibrary';
import Blog from './Components/Blog/Blog';
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<AboutPage />} />
        <Route path="/Connections" element={<Connections />} />
        <Route path="/HumanLibrary" element={<HumanLibrary/>} />
        <Route path="/UniBlog" element={<Blog/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;