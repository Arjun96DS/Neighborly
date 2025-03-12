// src/pages/Profile.js
import React from "react";
import { useHistory } from "react-router-dom";
import './register.css';  // Reusing the Register CSS file

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  if (!user) {
    history.push("/login");
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>User Profile</h2>
        <div className="form-group">
          <label>First Name</label>
          <p>{user.firstName}</p>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <p>{user.lastName}</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <p>{user.email}</p>
        </div>

        <div className="form-group">
          <label>Contact No</label>
          <p>{user.contactNo}</p>
        </div>

        <div className="form-group">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
