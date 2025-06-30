import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import EmailForm from "../components/EmailForm";


const Cacho = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userRole, setRole] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedRole) {
      setUser(storedUser);
      setRole(storedRole);

      if (storedRole !== "Student2") {
        navigate("/francisco");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container>
      <Typography variant="h4">
        Welcome {userRole} {user}
      </Typography>

      <EmailForm sender="cacho" />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Cacho;

