import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import EmailForm from "../components/EmailForm";
import dashboardStyles from "../styles/dashboardStyles"; 

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
    <Container style={dashboardStyles.container} disableGutters>
      <Typography variant="h4" style={dashboardStyles.welcomeText}> 
        Welcome {user}
      </Typography>

      <div style={dashboardStyles.emailFormContainer}>
        <EmailForm sender="galve" /> 
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
        style={dashboardStyles.logoutButton} 
      >
        Logout
      </Button>
    </Container>
  );
};

export default Galve;