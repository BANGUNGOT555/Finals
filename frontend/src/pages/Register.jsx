import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Define local styles for Register component, mirroring the dashboard/login theme
const registerStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Take full viewport height
    padding: "20px",
    backgroundColor: "#f0f2f5", // Light grey background from dashboard theme
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "border-box", // Include padding in width calculation
  },
  registerBox: {
    // This will mimic the 'emailFormContainer' and 'loginBox' from other styles
    width: "100%",
    maxWidth: "450px", // A good "normal" width for a registration form
    padding: "40px 30px", // Increased padding for a better feel
    backgroundColor: "#fff", // White background for the form box
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    marginBottom: "30px",
    color: "#333", // Dark color for text
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2.2rem", // Consistent heading size
  },
  textField: {
    // MUI TextField props make this less direct, but we'll use consistent fonts/colors
    marginBottom: "20px", // Spacing between fields
    '& label.Mui-focused': { // Style for label when input is focused
      color: '#28a745', // Primary color for focused label
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc', // Default border color
      },
      '&:hover fieldset': {
        borderColor: '#999', // Hover border color
      },
      '&.Mui-focused fieldset': {
        borderColor: '#28a745', // Focused border color (primary theme color)
      },
      'input': { // Style for the input text itself
        color: '#333', // Dark text color
        fontSize: '16px',
        padding: '12px 15px', // Adjust padding if needed
      }
    },
    'textarea': { // For multiline textfields if used
      color: '#333',
      fontSize: '16px',
    }
  },
  button: {
    backgroundColor: "#28a745", // Green primary color from dashboard theme
    color: "white",
    padding: "12px 25px",
    fontSize: "18px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    marginTop: "20px", // Space above the button
    "&:hover": {
      backgroundColor: "#218838", // Darker green on hover
    },
  },
};


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password || !role) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
        role,
      });
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    // Outer container for centering and background
    <Container style={registerStyles.container} disableGutters maxWidth={false}>
      {/* Inner container for the white register box */}
      <div style={registerStyles.registerBox}>
        <Typography variant="h4" style={registerStyles.heading}>Register</Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={registerStyles.textField} // Apply styles using MUI's sx prop
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={registerStyles.textField} // Apply styles using MUI's sx prop
        />
        <TextField
          label="Role"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={registerStyles.textField} // Apply styles using MUI's sx prop
        />
        <Button
          variant="contained"
          color="primary" // Keep MUI color primary to use its theme if you have one
          fullWidth
          onClick={handleRegister}
          sx={registerStyles.button} // Apply styles using MUI's sx prop
        >
          Register
        </Button>
      </div>
    </Container>
  );
};

export default Register;