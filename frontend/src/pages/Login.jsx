import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const loginStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", 
    padding: "20px",
    backgroundColor: "#f0f2f5", 
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "border-box", 
  },
  loginBox: {
    width: "100%",
    maxWidth: "450px", 
    padding: "40px 30px", 
    backgroundColor: "#fff", 
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", 
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    marginBottom: "30px",
    color: "#333", 
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2.2rem", 
  },
  textField: {
    marginBottom: "20px", 
    '& label.Mui-focused': { 
      color: '#28a745', 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc', 
      },
      '&:hover fieldset': {
        borderColor: '#999', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#28a745', 
      },
      'input': { 
        color: '#333', 
        fontSize: '16px',
        padding: '12px 15px', 
      }
    },
    'textarea': { 
      color: '#333',
      fontSize: '16px',
    }
  },
  button: {
    backgroundColor: "#28a745", 
    color: "white",
    padding: "12px 25px",
    fontSize: "18px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    marginTop: "20px", 
    "&:hover": {
      backgroundColor: "#218838", 
    },
  },
};


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("role", response.data.role);

      alert("Login successful!");

      const role = response.data.role.toLowerCase();
      switch (role) {
        case "student1":
          navigate("/balais");
          break;
        case "student2":
          navigate("/cacho");
          break;
        case "student3":
          navigate("/francisco");
          break;
        case "student4":
          navigate("/galve");
          break;
        case "student5":
          navigate("/tarroza");
          break;
        default:
          navigate("/login");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container style={loginStyles.container} disableGutters maxWidth={false}>
      <div style={loginStyles.loginBox}>
        <Typography variant="h4" style={loginStyles.heading}>Login</Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={loginStyles.textField} 
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={loginStyles.textField} 
        />
        <Button
          variant="contained"
          color="primary" 
          fullWidth
          onClick={handleLogin}
          sx={loginStyles.button} 
        >
          Login
        </Button>
      </div>
    </Container>
  );
};

export default Login;