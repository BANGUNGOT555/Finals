// Galve.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import EmailForm from "../components/EmailForm";
import dashboardStyles from "../styles/dashboardStyles"; // <--- IMPORT THE SHARED STYLES HERE

const Galve = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userRole, setRole] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedRole) {
      setUser(storedUser);
      setRole(storedRole);

      if (storedRole !== "Student4") {
        navigate("/tarroza");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    // <--- APPLY STYLES TO THE CONTAINER AND DISABLE GUTTERS
    <Container style={dashboardStyles.container} disableGutters>
      <Typography variant="h4" style={dashboardStyles.welcomeText}> {/* <--- APPLY WELCOME TEXT STYLE */}
        Welcome {userRole} {user}
      </Typography>

      {/* <--- WRAP EmailForm IN ITS STYLED CONTAINER */}
      <div style={dashboardStyles.emailFormContainer}>
        <EmailForm sender="galve" /> {/* The sender prop is already correct */}
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
        style={dashboardStyles.logoutButton} // <--- APPLY LOGOUT BUTTON STYLE
      >
        Logout
      </Button>
    </Container>
  );
};

export default Galve;