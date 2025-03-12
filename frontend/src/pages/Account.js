import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Account.css"; // Ensure CSS is applied

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false); // Toggle visibility of the profile info

  // Fetch user data from localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser); // Set user data if it exists
    } else {
      navigate("/login");  // Redirect to login if no user data is found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");  // Clear the logged-in status
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/");  // Redirect to homepage or login
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile); // Toggle visibility of profile data
  };

  return (
    <div className="account-container">
      <div className="account-content">
        <h3>Your Account</h3>
        
        <div className="account-options">
          <ul>
            <li onClick={handleProfileClick}>Profile</li>
            {showProfile && user && (
              <div className="profile-info">
                <p><strong>Full Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            )}
            <li onClick={() => navigate("/account/password")}>Password</li>
            <li onClick={() => navigate("/account/security")}>Account Security</li>
            <li onClick={() => navigate("/account/notifications")}>Notifications</li>
            <li onClick={() => navigate("/account/billing")}>Billing Info</li>
            <li onClick={() => navigate("/account/cancel")}>Cancel Task</li>
            <li onClick={() => navigate("/account/business")}>Business Info</li>
            <li onClick={() => navigate("/account/balance")}>Account Balance</li>
            <li onClick={() => navigate("/account/transactions")}>Transactions</li>
          </ul>
        </div>

        <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
