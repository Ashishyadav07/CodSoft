import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={'Page Not Found'}>
      <div className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for might be in another castle.</p>
        <Link to="/" className="go-back-button">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
