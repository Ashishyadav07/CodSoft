import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../Styles/AuthStyles.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate} from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Forgot Password"}>
      <div className="form-container">
        <h1 className="form-title">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="newPassword"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              className="form-control"
              id="exampleInputNewPassword"
              placeholder="Enter Your New Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="answer"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              className="form-control"
              id="exampleInputAnswer"
              placeholder="Enter your favourite movie"
              required
            />
          </div>
          <div className="mt-5">
           

            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => navigate("/forgot-password")}
            >
              Reset  Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
