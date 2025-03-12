import React, { useState } from "react";
import { Button, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle account deletion
  const handleDeleteAccount = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail"); // Retrieve the logged-in user's email
      if (!userEmail) {
        alert("No user found. Please log in again.");
        navigate("/login");
        return;
      }

      const response = await fetch("http://localhost:5001/api/delete-account", { // Update with API URL
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      if (response.ok) {
        alert("Your account has been successfully deleted.");
        localStorage.clear(); // Clear all session data
        navigate("/register"); // Redirect to registration page
      } else {
        alert("Failed to delete account. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setOpen(false);
    }
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h5">Delete Account</Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Warning: Deleting your account is irreversible. All your data will be lost.
      </Typography>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        Delete My Account
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Account Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to permanently delete your account?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleDeleteAccount} color="error">Yes, Delete</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DeleteAccount;
