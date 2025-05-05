import React from "react";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Unispherelogo.png";
import "./TermsAndCondition.css";

const TermsAndCondition = () => {
  return (
    <div className="terms-and-condition-main-container">
      <div className="terms-and-conditions-logo-and-cancel">
        <img className="terms-and-conditions-logo" src={Logo} alt="Logo" />
        <RxCross2 className="terms-and-condition-cross" />
      </div>
      <div className="terms-and-conditons-main-container">
        <h1 className="terms-and-conditons-heading">Terms & Condition</h1>
      </div>
      <div className="terms-and-condition-text-container">
        <p className="terms-and-condition-text">
          Uniisphere – Terms & Conditions Last updated: April 5, 2025 Welcome to
          Uniisphere, a platform built exclusively for college students to
          connect, learn, and grow. By accessing or using Uniisphere and its
          features, you agree to the following Terms & Conditions. Please read
          them carefully. 1. Acceptance of Terms By creating an account or using
          Uniisphere in any way, you agree to comply with these Terms. If you do
          not agree, please do not use the app or its services. 2. Eligibility •
          You must be a currently enrolled student at a recognized educational
          institution. • You must provide accurate verification during signup. •
          You must be at least 18 years old or of legal age in your
          jurisdiction. 3. User Conduct You agree to: • Use Uniisphere only for
          lawful, educational, and social purposes. • Respect other users’
          privacy, dignity, and safety. • Avoid posting or sharing offensive,
          harmful, or illegal content. 4. Account Responsibility • You are
          responsible for maintaining the confidentiality of your login
          credentials. • Any activity under your account is your responsibility.
          • Notify us immediately if you suspect unauthorized access. 5. Content
          Ownership & Usage • You retain rights to the content you create (e.g.,
          reviews, posts). • By uploading content, you grant Uniisphere a
          non-exclusive, royalty-free license to display and distribute it on
          the platform. • You may not copy, scrape, or redistribute content from
          other users without permission. • Also not use any kind of data,
          design or any other thing form Uniisphere. 6. Data Usage & Privacy •
          We collect and use your data in accordance with our Privacy Policy. •
          Some features store chat logs, application info, or reading activity
          to personalize your experience and enforce safety. 7. Feature-Specific
          Terms Human Library (Random Student Chat) • For verified students
          only. • Chats may be monitored or stored for moderation. • Harassment,
          abuse, or inappropriate behaviour will result in suspension or ban. •
          While chats appear anonymous, moderation data is retained for safety.
          NGO Internships • Uniisphere acts only as a facilitator; we do not
          endorse or guarantee internships. • You are responsible for providing
          accurate information in applications. • All agreements are strictly
          between you and the NGO. • You cannot request to delete your
          application data at any time. E-Books Section • Reading activity,
          reviews, and highlights may be public unless privacy settings are
          adjusted. • Reviews must be respectful and authentic. • Content is for
          personal, non-commercial use only. • Users must not upload pirated or
          illegal material. • Neither should scrap and use books from
          Uniisphere. If done there will be legal actions taken. Mentorship •
          The Mentorship feature connects students with peer or senior mentors
          within their institution, Skills and Intrest. • All participants must
          be respectful, honest, and professional in communication. • Mentorship
          relationships are voluntary and not monitored unless reported. • Any
          abuse, harassment, or misuse may result in removal from the program or
          app penalties. • Users can opt out of mentorship at any time via
          settings or by contacting support. 8. Suspension & Termination We
          reserve the right to suspend or terminate accounts that: • Violate
          these Terms • Are involved in abusive, fraudulent, or harmful
          behaviour • Attempt to exploit or manipulate the platform 9.
          Disclaimer of Warranties Uniisphere is provided “as is” and “as
          available.” We do not guarantee uninterrupted or error-free service.
          10. Limitation of Liability Uniisphere is not liable for: •
          User-generated content • Outcomes of internship applications •
          Third-party actions • Data loss or damage 11. Changes to Terms We may
          update these Terms from time to time. Continued use of Uniisphere
          after changes means you accept the new terms. 12. Contact Us If you
          have questions about these Terms, reach out at: 📧
          support@uniisphere.app
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
