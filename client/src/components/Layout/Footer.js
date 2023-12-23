import React, {useEffect} from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="footer">
        <h1>All Right Reserved © Shoe Vista 2023</h1>
        <p>
          <Link to="/about">About</Link> |<Link to="/contact">Contact</Link> |
          <Link to="/privacy">Privacy Policy</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
