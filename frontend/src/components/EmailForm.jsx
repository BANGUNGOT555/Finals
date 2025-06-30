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
    <div>
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="to"
          type="email"
          placeholder="Recipient"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="subject"
          placeholder="Subject"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          name="message"
          placeholder="Message"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}


