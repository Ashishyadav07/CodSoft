import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi"; // Import icons

const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/contactus.jpg" alt="contactus" />
        </div>
        <div className="col-md-4">
          <h1>CONTACT US</h1>
          <p>
            Any query and info about the product? Feel free to call anytime. We
            are 24/7 available.
          </p>
          <p className="mt-3">
            <BiMailSend />: www.help@shoestore.com
          </p>
          <p className="mt-3">
            <BiPhoneCall />: 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport />: 1800-0000-0000 (toll-free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
