import React from "react";
import Layout from "../components/Layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="privacy-policy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <div className="privacy-section">
          <h2 className="privacy-section-title">Welcome to Shoe Vista!</h2>
          <p>
            We are committed to protecting the privacy of our users. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information.
          </p>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">Information We Collect</h2>
          <p>
            In order to provide you with the best possible shopping experience,
            we may collect the following types of information:
          </p>
          <ul>
            <li>
              Personal Information: Name, email address, and contact details.
            </li>
            <li>Payment Information: For processing your orders securely.</li>
            <li>Shopping Preferences: Your favorite styles and sizes.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including
            but not limited to:
          </p>
          <ul>
            <li>Fulfilling and processing your orders</li>
            <li>Providing personalized recommendations</li>
            <li>Improving our products and services</li>
            <li>Contacting you for order updates and promotions</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">Security</h2>
          <p>
            We prioritize the security of your information and employ
            industry-standard measures to protect it. However, no method of
            transmission over the internet or electronic storage is completely
            secure.
          </p>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update our privacy policy to reflect changes in our practices
            and services. Please review this page regularly for updates.
          </p>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">Contact Us</h2>
          <p>
            If you have any questions or concerns about our privacy policy, feel
            free to contact us at:
          </p>
          <p>Email: support@shoevista.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
