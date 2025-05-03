import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Components/AboutPage/AboutPage';
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;