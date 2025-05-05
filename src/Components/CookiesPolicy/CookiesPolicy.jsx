import React from "react";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Unispherelogo.png";
import "./CookiesPolicy.css";

const CookiesPolicy = () => {
  return (
    <div className="cookies-policy-main-container">
      <div className="cookies-policy-logo-and-cancel">
        <img className="cookies-policy-logo" src={Logo} alt="Logo" />
        <RxCross2 className="cookies-policy-cross" />
      </div>
      <div className="terms-and-conditons-main-container">
        <h1 className="terms-and-conditons-heading">Cookie Policy</h1>
      </div>
      <div className="cookies-policy-text-container">
        <p className="cookies-policy-text">
         Uniisphere Cookies Policy Last updated: April 5, 2025 This Cookies Policy explains how Uniisphere ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control their use. 1. What Are Cookies? Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They help us enhance your user experience by remembering your preferences and activity. 2. Why We Use Cookies We use cookies for the following purposes: Essential Cookies: To make our website function properly (e.g., login, navigation, security). Performance & Analytics Cookies: To understand how visitors interact with our site (e.g., Google Analytics). Functionality Cookies: To remember your preferences (e.g., language, dark/light mode). Targeting & Advertising Cookies (if applicable): To deliver relevant ads based on your browsing behaviour (currently not active on Uniisphere but may be introduced later). 3. Types of Cookies We Use Type Purpose Duration Session Cookies Keep you logged in during a visit Deleted after you close your browser Persistent Cookies Remember preferences for future visits Stored until manually deleted or expire Third-Party Cookies For analytics or external tools Varies based on the provider 4. Managing Cookies You have full control over cookie usage. You can: Adjust your browser settings to block or delete cookies Opt-out of certain tracking by using tools like YourOnlineChoices Decline non-essential cookies through our cookie banner or settings Note: Disabling cookies may affect your experience on the Uniisphere website. 5. Changes to This Policy We may update this Cookies Policy to reflect changes in legal, technical, or operational requirements. We encourage you to review it regularly. 6. Contact Us Have questions? Reach out at: uniisphere2024@gmail.com
        </p>
      </div>
    </div>
  );
};

export default CookiesPolicy;
