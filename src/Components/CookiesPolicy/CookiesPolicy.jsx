import React from "react";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Unispherelogo.png";
import "./CookiesPolicy.css";
import Background from "../Background/Background";

const CookiesPolicy = () => {
  return (
    <div className="cookies-policy-main-container">
      <Background/>
      <div className="cookies-policy-logo-and-cancel">
        <img className="cookies-policy-logo" src={Logo} alt="Logo" />
        {/* <RxCross2 className="cookies-policy-cross" /> */}
      </div>
      <div className="terms-and-conditons-main-container">
        <h1 className="terms-and-conditons-heading">Cookie Policy</h1>
      </div>
      <div className="cookies-policy-text-container">
        <p className="cookies-policy-text">
          Uniisphere Cookies Policy
          <br />
          Last updated: April 5, 2025
          <br />
          This Cookies Policy explains how Uniisphere ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control their use.
          <br /><br />
          <strong>1. What Are Cookies?</strong>
          <br />
          Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They help us enhance your user experience by remembering your preferences and activity.
          <br /><br />
          <strong>2. Why We Use Cookies</strong>
          <br />
          We use cookies for the following purposes:
          <br />
          • Essential Cookies: To make our website function properly (e.g., login, navigation, security).
          <br />
          • Performance & Analytics Cookies: To understand how visitors interact with our site (e.g., Google Analytics).
          <br />
          • Functionality Cookies: To remember your preferences (e.g., language, dark/light mode).
          <br />
          • Targeting & Advertising Cookies (if applicable): To deliver relevant ads based on your browsing behaviour (currently not active on Uniisphere but may be introduced later).
          <br /><br />
          <strong>3. Types of Cookies We Use</strong>
          <br />
          <table>
            <tr>
              <th>Type</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>Session Cookies</td>
              <td>Keep you logged in during a visit</td>
              <td>Deleted after you close your browser</td>
            </tr>
            <tr>
              <td>Persistent Cookies</td>
              <td>Remember preferences for future visits</td>
              <td>Stored until manually deleted or expire</td>
            </tr>
            <tr>
              <td>Third-Party Cookies</td>
              <td>For analytics or external tools</td>
              <td>Varies based on the provider</td>
            </tr>
          </table>
          <br />
          <strong>4. Managing Cookies</strong>
          <br />
          You have full control over cookie usage. You can:
          <br />
          • Adjust your browser settings to block or delete cookies
          <br />
          • Opt-out of certain tracking by using tools like YourOnlineChoices
          <br />
          • Decline non-essential cookies through our cookie banner or settings
          <br />
          Note: Disabling cookies may affect your experience on the Uniisphere website.
          <br /><br />
          <strong>5. Changes to This Policy</strong>
          <br />
          We may update this Cookies Policy to reflect changes in legal, technical, or operational requirements. We encourage you to review it regularly.
          <br /><br />
          <strong>6. Contact Us</strong>
          <br />
          Have questions? Reach out at:
          <br />
          📧 support@uniisphere.app
        </p>
      </div>
    </div>
  );
};

export default CookiesPolicy;