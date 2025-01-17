import React, { useState } from 'react';
import '../styles/VerifyOTP.css';

const VerifyOTP = ({ otp, setOtp, handleVerifyOtp }) => {
  // Function to handle OTP change
  const handleOtpChange = (e, index) => {
    const newOtp = otp.split('');
    newOtp[index] = e.target.value;
    setOtp(newOtp.join(''));

    // Move cursor to next input after typing
    if (e.target.value !== '') {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Function to handle backspace and move cursor to the previous input
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="verify-otp-container">
      <div className="verify-otp-card">
        <h2 className="verify-otp-title">Verify OTP</h2>
        <p className="verify-otp-subtitle">Enter the 4-digit OTP sent to your phone</p>
        <div className="verify-otp-input-container">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={otp[index] || ''}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
              className="verify-otp-input"
              placeholder=""
            />
          ))}
        </div>
        <button onClick={handleVerifyOtp} className="verify-otp-btn">
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
