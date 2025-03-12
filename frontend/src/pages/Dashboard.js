// export default Dashboard;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css"; // Import CSS

// Importing components
import AccountBalance from "./AccountBalance";
import BillingInfo from "./BillingInfo";
import CancelTask from "./CancelTask";
import Notifications from "./Notifications";
import Password from "./Password";
import Transactions from "./Transactions";
import DeleteAccount from "./DeleteAccount"; // Import DeleteAccount Component

const Dashboard = () => {
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("profile"); // Default: Profile
  const [userDetails, setUserDetails] = useState(null); // Store user details

  const navigate = useNavigate();

  // Fetch user details from localStorage when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserDetails(storedUser);
    } else {
      navigate("/login"); // Redirect to login if no user found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    window.location.href = "/login"; // Redirect to login page
  };

  const handleDeleteAccount = () => {
    alert("Account deleted successfully");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    window.location.href = "/login"; // Redirect to login after account deletion
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2 className="text-2xl font-bold mb-4">Your Account</h2>
        <ul className="space-y-2">
          <li className={`p-2 cursor-pointer ${selectedPage === "profile" ? "active" : ""}`} onClick={() => setSelectedPage("profile")}>
            Profile
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "password" ? "active" : ""}`} onClick={() => setSelectedPage("password")}>
            Password
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "accountSecurity" ? "active" : ""}`} onClick={() => setSelectedPage("accountSecurity")}>
            Account Security
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "notifications" ? "active" : ""}`} onClick={() => setSelectedPage("notifications")}>
            Notifications
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "billingInfo" ? "active" : ""}`} onClick={() => setSelectedPage("billingInfo")}>
            Billing Info
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "cancelTask" ? "active" : ""}`} onClick={() => setSelectedPage("cancelTask")}>
            Cancel a Task
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "businessInfo" ? "active" : ""}`} onClick={() => setSelectedPage("businessInfo")}>
            Business Information
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "accountBalance" ? "active" : ""}`} onClick={() => setSelectedPage("accountBalance")}>
            Account Balance
          </li>
          <li className={`p-2 cursor-pointer ${selectedPage === "transactions" ? "active" : ""}`} onClick={() => setSelectedPage("transactions")}>
            Transactions
          </li>
          <li className="p-2 text-red-500 cursor-pointer" onClick={() => setDeleteConfirmationOpen(true)}>
            Delete Account
          </li>
          <li className="p-2 text-blue-500 cursor-pointer" onClick={handleLogout}>
            Log Out
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {selectedPage === "profile" && userDetails && (
          <div>
            <h3 className="text-xl mb-4">Profile</h3>
            <div className="button-card">
              <h4 className="text-lg">Name: {userDetails.firstName} {userDetails.lastName}</h4>
              <p>Email: {userDetails.email}</p>
              <p>Member Since: {userDetails.memberSince || "N/A"}</p>
            </div>
          </div>
        )}

        {selectedPage === "password" && <Password />}
        {selectedPage === "accountSecurity" && <div><h3 className="text-xl mb-4">Account Security</h3><p>Manage your security settings.</p></div>}
        {selectedPage === "notifications" && <Notifications />}
        {selectedPage === "billingInfo" && <BillingInfo />}
        {selectedPage === "cancelTask" && <CancelTask />}
        {selectedPage === "accountBalance" && <AccountBalance />}
        {selectedPage === "transactions" && <Transactions />}
      </div>

      {/* Delete Account Modal (Only shows when button is clicked) */}
      {isDeleteConfirmationOpen && (
        <DeleteAccount 
          isOpen={isDeleteConfirmationOpen} 
          onClose={() => setDeleteConfirmationOpen(false)} 
          onConfirm={handleDeleteAccount} 
        />
      )}
    </div>
  );
};

export default Dashboard;
