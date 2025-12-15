// frontend/src/components/AppointmentForm.js
import React, { useState } from "react";
import api from "../api";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await api.post("/api/appointments", form);
      setSuccess("Appointment booked! Naveen will contact you soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredDate: "",
      });
    } catch (err) {
      console.error(err);
      setError("Error booking appointment. Check backend.");
    }
  };

  return (
    <div className="card">
      <h3 className="card-title">Book Appointment</h3>
      <p className="card-subtitle">
        Your details will be saved in MongoDB for consultation scheduling.
      </p>

      <form onSubmit={handleSubmit} style={{ fontSize: "0.85rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <label>Preferred Date</label>
        <input
          type="date"
          name="preferredDate"
          value={form.preferredDate}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your question / concern (optional)"
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "0.5rem" }}
        >
          Submit
        </button>
      </form>

      {success && (
        <p style={{ color: "#9df59d", marginTop: "0.4rem", fontSize: "0.8rem" }}>
          {success}
        </p>
      )}
      {error && (
        <p style={{ color: "#ff8b8b", marginTop: "0.4rem", fontSize: "0.8rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}
