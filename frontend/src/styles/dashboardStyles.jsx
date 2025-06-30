// src/styles/dashboardStyles.js

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
    width: "calc(100% - 40px)", // Still allows some responsiveness for the text
    maxWidth: "900px", // Max width for the welcome text for readability
    padding: "0 20px",
    boxSizing: "border-box",
  },
  emailFormContainer: {
    // ADJUSTMENTS HERE FOR THE CONTAINER OF THE FORM (THE WHITE BOX)
    width: "calc(100% - 40px)", // Ensures it has 20px padding on each side, relative to its parent
    maxWidth: "500px", // A good, balanced max-width for the form container itself
    // Feel free to adjust this value:
    // For a slightly smaller box: maxWidth: "450px",
    // For a slightly larger box: maxWidth: "550px",

    marginBottom: "30px",
    padding: "30px", // Internal padding for the actual form content
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