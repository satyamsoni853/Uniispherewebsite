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
import Background from "./Components/Background/Background";
import OurGoal from "./Components/OurGoal/OurGoal";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./Components/TermsAndCondition/TermsAndCondition";
import CookiesPolicy from "./Components/CookiesPolicy/CookiesPolicy";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <AboutPage />
              <Peoples />
              <Connection />
              <EduValt />
              <HumanLibrary />
              <Blog />
              <Collaborates />
              <OurGoal />
              <Features />
            </>
          }
        />
        <Route path="/user-agreement" element={<TermsAndCondition />} />
        <Route path="/cookie-policy" element={<CookiesPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
