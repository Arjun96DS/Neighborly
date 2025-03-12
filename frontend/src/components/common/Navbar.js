import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Handle dropdown open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle dropdown close
  const handleMenuClose = () => {
    console.log("Menu closed");
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.secondary, padding: "8px 15px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo Section */}
        <Box
          sx={{ display: "flex", alignItems: "center", color: theme.palette.text.primary, cursor: "pointer" }}
          onClick={() => navigate("/")} // Redirect to homepage
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: 700,
              fontSize: "38px",
              letterSpacing: 0.5,
              fontStyle: "italic",
              color: theme.palette.text.primary,
            }}
          >
            N
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mx: 0.1 }}>
            <PanToolIcon sx={{ fontSize: 26, color: theme.palette.text.primary, verticalAlign: "middle" }} />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "21px",
              fontWeight: 500,
              position: "relative",
              top: "5px",
              color: theme.palette.text.primary,
            }}
          >
            ly
          </Typography>
        </Box>

        {/* Account Button */}
        <Box>
          <Button
            startIcon={<AccountCircleIcon />}
            onClick={handleMenuOpen}
            sx={{ color: theme.palette.text.primary, fontSize: "16px", fontWeight: "500" }}
          >
            Account
          </Button>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {user ? (
              <>
                <MenuItem onClick={() => { handleMenuClose(); navigate("/account"); }}>Profile</MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); handleLogout(); }}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={() => { handleMenuClose(); navigate("/login"); }}>Login</MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); navigate("/register"); }}>Register</MenuItem>
              </>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
// import PanToolIcon from "@mui/icons-material/PanTool"; 
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";  
// import { useTheme } from "@mui/material/styles"; 
// import { useNavigate } from "react-router-dom"; 

// function Navbar() {
//   const theme = useTheme(); 
//   const navigate = useNavigate(); 
//   const [anchorEl, setAnchorEl] = useState(null);

//   // Handle dropdown open
//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Handle dropdown close
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: theme.palette.background.secondary, padding: "8px 15px" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
//         {/* Logo Section */}
//         <Box 
//           sx={{ display: "flex", alignItems: "center", color: theme.palette.text.primary, cursor: "pointer" }}
//           onClick={() => navigate("/")} // Redirect to homepage
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontFamily: theme.typography.fontFamily,
//               fontWeight: 700,
//               fontSize: "38px", 
//               letterSpacing: 0.5,
//               fontStyle: "italic", 
//               color: theme.palette.text.primary,
//             }}
//           >
//             N
//           </Typography>

//           <Box sx={{ display: "flex", alignItems: "center", mx: 0.1 }}> 
//             <PanToolIcon sx={{ fontSize: 26, color: theme.palette.text.primary, verticalAlign: "middle" }} />
//           </Box>

//           <Typography
//             variant="h5"
//             sx={{
//               fontFamily: theme.typography.fontFamily,
//               fontSize: "21px", 
//               fontWeight: 500,
//               position: "relative", 
//               top: "5px", 
//               color: theme.palette.text.primary,
//             }}
//           >
//             ly
//           </Typography>
//         </Box>

//         {/* Account Button */}
//         <Box>
//           <Button 
//             startIcon={<AccountCircleIcon />} 
//             onClick={handleMenuOpen} 
//             sx={{ color: theme.palette.text.primary, fontSize: "16px", fontWeight: "500" }}
//           >
//             Account
//           </Button>

//           {/* Dropdown Menu */}
//           <Menu 
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={() => { handleMenuClose(); navigate("/login"); }}>Login</MenuItem>
//             <MenuItem onClick={() => { handleMenuClose(); navigate("/register"); }}>Register</MenuItem>
//           </Menu>
//         </Box>

//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;





// import React from "react";
// import { AppBar, Toolbar, Typography, Box } from "@mui/material";
// import PanToolIcon from "@mui/icons-material/PanTool"; 
// import { useTheme } from "@mui/material/styles"; 
// import { useNavigate } from "react-router-dom"; 

// function Navbar() {
//   const theme = useTheme(); 
//   const navigate = useNavigate(); 

//   return (
//     <AppBar position="static" sx={{ backgroundColor: theme.palette.background.secondary, padding: "8px 15px" }}>
//       <Toolbar>
//         <Box 
//           sx={{ display: "flex", alignItems: "center", color: theme.palette.text.primary, cursor: "pointer" }}
//           onClick={() => navigate("/")} // Redirect to homepage
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontFamily: theme.typography.fontFamily,
//               fontWeight: 700,
//               fontSize: "38px", 
//               letterSpacing: 0.5,
//               fontStyle: "italic", 
//               color: theme.palette.text.primary,
//             }}
//           >
//             N
//           </Typography>

//           <Box sx={{ display: "flex", alignItems: "center", mx: 0.1 }}> 
//             <PanToolIcon sx={{ fontSize: 26, color: theme.palette.text.primary, verticalAlign: "middle" }} />
//           </Box>

//           <Typography
//             variant="h5"
//             sx={{
//               fontFamily: theme.typography.fontFamily,
//               fontSize: "21px", 
//               fontWeight: 500,
//               position: "relative", 
//               top: "5px", 
//               color: theme.palette.text.primary,
//             }}
//           >
//             ly
//           </Typography>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
