
import React from 'react';
import '../styles/Login.css';

const Login = ({ phoneNumber, setPhoneNumber, handleGetOtp }) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login using Phone Number</h2>
        <p className="login-subtitle">Secure your access</p>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="login-input"
        />
        <button onClick={handleGetOtp} className="login-btn">
          Get OTP
        </button>
      </div>
    </div>
  );
};

export default Login;
