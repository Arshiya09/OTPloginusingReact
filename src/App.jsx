import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import VerifyOTP from './components/VerifyOTP';
import MainPage from './components/MainPage';
import './App.css';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  const handleGetOtp = async () => {
    try {
      const response = await fetch('https://estatecircleapi.firsteconomy.com/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: phoneNumber }),
      });
      if (response.ok) {
        setOtpSent(true);
        alert('OTP Sent');
      } else {
        alert('Error sending OTP');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch('https://estatecircleapi.firsteconomy.com/api/verifyOtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: phoneNumber, otp: otp }),
      });
      if (response.ok) {
        alert('OTP Verified');
        navigate('/main'); // Navigate to the MainPage on success
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            !otpSent ? (
              <Login
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                handleGetOtp={handleGetOtp}
              />
            ) : (
              <VerifyOTP otp={otp} setOtp={setOtp} handleVerifyOtp={handleVerifyOtp} />
            )
          }
        />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
