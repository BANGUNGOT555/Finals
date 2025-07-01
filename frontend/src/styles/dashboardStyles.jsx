const dashboardStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    maxWidth: '100%',
    width: "100%",
    padding: "0",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "border-box",
  },
  welcomeText: {
    marginBottom: "30px",
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2.5rem",
    width: "calc(100% - 40px)", 
    maxWidth: "900px", 
    padding: "0 20px",
    boxSizing: "border-box",
  },
  emailFormContainer: {
    width: "calc(100% - 40px)", 
    maxWidth: "500px", 

    marginBottom: "30px",
    padding: "30px", 
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "12px 25px",
    fontSize: "18px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#c82333",
    },
  },
};

export default dashboardStyles;