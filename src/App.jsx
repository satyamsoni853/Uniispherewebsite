import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Components/AboutPage/AboutPage';
import Peoples from './Components/Peoples/Peoples';
import Footer from './Components/Footer/Footer';
import  Collaborates from './Components/Collaborates/Collaborates'
import Features from './Components/Features/Features';
function App() {
  return (
    <BrowserRouter>
    <Nav
      
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* <Route path="/" element={<AboutPage />} /> */}
        {/* <Route path="/" element={<Peoples />} /> */}
        {/* <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/" element={<Collaborates />} /> */}
        <Route path="/" element={<Features />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;