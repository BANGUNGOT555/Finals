import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const registerStyles = {
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
  registerBox: {
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
    
    <Container style={registerStyles.container} disableGutters maxWidth={false}>
      
      <div style={registerStyles.registerBox}>
        <Typography variant="h4" style={registerStyles.heading}>Register</Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={registerStyles.textField} 
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={registerStyles.textField} 
        />
        <TextField
          label="Role"
          placeholder="Role (Student1–Student5)"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={registerStyles.textField} 
        />
        <Button
          variant="contained"
          color="primary" 
          fullWidth
          onClick={handleRegister}
          sx={registerStyles.button} 
        >
          Register
        </Button>
        <Typography variant="body2" style={{ marginTop: '20px', color: '#333' }}>
          Do you already have an account?{' '}
          <span
            style={{ color: '#28a745', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </Typography>
      </div>
    </Container>
  );
};

export default Register;