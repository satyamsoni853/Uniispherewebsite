import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Logo from "./Unispherelogo.png";
import "./PrivacyPolicy.css";



const PrivacyPolicy = () => {
  return (
      <div className="privacy-policy-main-container">
          <div className="privacy-policy-logo-and-cancel">
            <img className="privacy-policy-logo" src={Logo} alt="Logo" />
            <RxCross2 className="privacy-policy-cross" />
          </div>
          <div className="terms-and-conditons-main-container">
            <h1 className="terms-and-conditons-heading">Privacy Policy</h1>
          </div>
          <div className="privacy-policy-text-container">
            <p className="privacy-policy-text">
        Welcome to Uniisphere — a digital space where college students connect, collaborate, and grow. Your trust means everything to us. This Privacy Policy outlines what information we collect, how we use it, and the choices you have. 1. What Data We Collect 1.1 Information You Provide:  When you sign up or use our features, we may ask for: Name Email address or college credentials City or region Password Any info you share in posts, resumes, applications, or forms Sharing additional details (like skills, interests, or academic info) is optional but helps enhance your experience. 1.2 Content from Others:  Other users may share content that includes you (e.g., tagged posts, mentions, or group interactions). 1.3 Usage Data:  We collect data when you interact with the app — like viewing content, searching, messaging, or attending events. We use cookies, session logs, and device IDs to understand activity and ensure app security. 1.4 Location Data:  If allowed, we may use device signals (like GPS or IP) to estimate your location and personalize content or features. You can turn this off anytime in settings. 1.5 Communications:  We log messaging activity (sender, receiver, timestamp), but not the content of private chats unless flagged for moderation. 1.6 Evolving Data:  As Uniisphere grows, new tools may require new types of data. If anything major changes, we’ll let you know clearly. 2. How We Use Your Data 2.1 Core Functionality:  We use your data to: Verify your student status Help you find classmates, opportunities, and content Suggest connections, skills, or internships Recommend learning resources based on your interests Personalize your feed with posts, events, or insights 2.2 Communications:  We’ll message you about app activity, account security, suggestions, and updates via email, in-app notifications, or text (based on your preferences). 2.3 Marketing & Growth:  We may use anonymized data to promote Uniisphere or show how users engage with features (e.g., "John from XYZ University just joined..."). 2.4 Research & Insights:  We analyze trends to improve the app and may partner with trusted researchers — always ensuring your data is protected and anonymized. 3. Your Rights & Choices You can view and update your info anytime You can opt out of certain communications Deactivation is allowed, but full deletion may be delayed for up to 5 years for legal and platform integrity reasons 4. Security & Data Retention We use secure systems to store your data, including encryption and limited access. While no system is perfect, we constantly monitor and improve security. 5. Contact Us Have questions? We’re here to help. Email: uniisphere2024@gmail.com 
            </p>
          </div>
        </div>
  )
}

export default PrivacyPolicy