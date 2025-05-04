import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutPage from "./Components/AboutPage/AboutPage";
import Peoples from "./Components/Peoples/Peoples";
import Footer from "./Components/Footer/Footer";
import Collaborates from "./Components/Collaborates/Collaborates";
import Features from "./Components/Features/Features";
import HumanLibrary from "./Components/HumanLibrary/HumanLibrary";
import Blog from "./Components/Blog/Blog";
import Connection from "./Components/Connections/Connections";
 import EduValt from "./Components/EduValt/EduValt";
 
import OurGoal from './Components/OurGoal/OurGoal'


function App() {
  return (
    <BrowserRouter>
    <Background/>
      <Navbar />
      <AboutPage />
      <Peoples />
      <Connection />
 
      < EduValt/>
      <HumanLibrary />
      <Blog />
 <Features />
      <Collaborates />
      <OurGoal/>
      <Features/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
