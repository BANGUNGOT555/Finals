import React, { useState } from "react";
import axios from "axios";

export default function EmailForm({ sender }) {
  const [formData, setFormData] = useState({ to: "", subject: "", message: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/send-email", {
        ...formData,
        sender,
      });
      setResponse(res.data.message);
    } catch (error) {
      setResponse("Error sending email");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Send Email</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="to"
          type="email"
          placeholder="Recipient"
          required
          onChange={handleChange}
          style={styles.input}
        />
        <br />
        <br />
        <input
          name="subject"
          placeholder="Subject"
          required
          onChange={handleChange}
          style={styles.input}
        />
        <br />
        <br />
        <textarea
          name="message"
          placeholder="Message"
          required
          onChange={handleChange}
          style={styles.textarea}
        />
        <br />
        <br />
        <button type="submit" style={styles.button}>Send</button>
      </form>
      {response && <p style={styles.response}>{response}</p>}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    width: "100%",
    padding: "0",
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    textAlign: "center",
    color: "#28a745",
    marginBottom: "25px",
    fontSize: "28px",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    width: "100%",
  },
  input: {
    width: "350px",
    padding: "12px 15px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    color: "#333", 
  },
  textarea: {
    width: "350px",
    padding: "12px 15px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
    minHeight: "120px",
    resize: "vertical",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    color: "#333", 
  },
  button: {
    backgroundColor: "#28a745",
    color: "white", 
    padding: "15px 25px",
    border: "none",
    borderRadius: "6px",
    fontSize: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "350px",
    boxSizing: "border-sizing",
  },
  buttonHover: {
    backgroundColor: "#218838",
  },
  response: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "16px",
    color: "#28a745",
    fontWeight: "bold",
  },
};