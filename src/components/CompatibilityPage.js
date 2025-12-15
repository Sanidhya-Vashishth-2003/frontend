import React, { useState } from "react";
import api from "../api";

export default function CompatibilityPage() {
  const [form, setForm] = useState({
    p1Name: "",
    p1Dob: "",
    p1Time: "",
    p1Place: "",
    p1Birthplace: "",
    p2Name: "",
    p2Dob: "",
    p2Time: "",
    p2Place: "",
    p2Birthplace: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await api.post("/api/compatibility", form);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Error calculating compatibility. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  const c = result?.compatibility;

  return (
    <div className="page">
      <h1 style={{ marginBottom: "0.8rem" }}>Partner Compatibility</h1>
      <p style={{ color: "#d9dcff", marginBottom: "1rem", fontSize: "0.95rem" }}>
        Enter birth details of both partners to receive a structured compatibility
        overview. This is currently a demo engine prepared for connecting to a real
        astrology API later.
      </p>

      <div className="card" style={{ marginBottom: "1.2rem" }}>
        <h3 className="card-title">Enter Partner Details</h3>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1rem",
            fontSize: "0.85rem",
            marginTop: "0.6rem",
          }}
        >
          <div>
            <h4>Partner 1</h4>
            <input
              type="text"
              name="p1Name"
              placeholder="Name"
              value={form.p1Name}
              onChange={handleChange}
              required
            />
            <label>DOB</label>
            <input
              type="date"
              name="p1Dob"
              value={form.p1Dob}
              onChange={handleChange}
              required
            />
            <label>Time</label>
            <input
              type="time"
              name="p1Time"
              value={form.p1Time}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="p1Place"
              placeholder="Current City"
              value={form.p1Place}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="p1Birthplace"
              placeholder="Birthplace (City, Country)"
              value={form.p1Birthplace}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <h4>Partner 2</h4>
            <input
              type="text"
              name="p2Name"
              placeholder="Name"
              value={form.p2Name}
              onChange={handleChange}
              required
            />
            <label>DOB</label>
            <input
              type="date"
              name="p2Dob"
              value={form.p2Dob}
              onChange={handleChange}
              required
            />
            <label>Time</label>
            <input
              type="time"
              name="p2Time"
              value={form.p2Time}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="p2Place"
              placeholder="Current City"
              value={form.p2Place}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="p2Birthplace"
              placeholder="Birthplace (City, Country)"
              value={form.p2Birthplace}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ alignSelf: "flex-end" }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ marginTop: "0.7rem" }}
            >
              {loading ? "Calculating..." : "Check Compatibility"}
            </button>
          </div>
        </form>

        {error && (
          <p style={{ color: "#ff8b8b", marginTop: "0.5rem", fontSize: "0.8rem" }}>
            {error}
          </p>
        )}
      </div>

      {/* RESULT */}
      {result && (
        <div className="card">
          <h3 className="card-title">
            Result for {result.partner1.name} &amp; {result.partner2.name}
          </h3>
          <p className="card-subtitle">
            Overall Verdict: <strong>{c.verdict}</strong> (Score: {c.score}/100)
          </p>

          <h4 style={{ marginTop: "0.7rem" }}>Summary</h4>
          <p>{c.summary}</p>

          <h4 style={{ marginTop: "0.7rem" }}>Strengths</h4>
          <ul className="card-list">
            {c.strengths.map((s, i) => (
              <li key={"s" + i}>+ {s}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: "0.7rem" }}>Challenges</h4>
          <ul className="card-list">
            {c.challenges.map((ch, i) => (
              <li key={"c" + i}>⚠ {ch}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: "0.7rem" }}>Emotional Compatibility</h4>
          <p>{c.emotional}</p>

          <h4 style={{ marginTop: "0.7rem" }}>Communication</h4>
          <p>{c.communication}</p>

          <h4 style={{ marginTop: "0.7rem" }}>Long-term Outlook</h4>
          <p>{c.longTerm}</p>

          <h4 style={{ marginTop: "0.7rem" }}>Advice</h4>
          <p>
            <strong>Together:</strong> {c.advice.together}
          </p>
          <p>
            <strong>Individual:</strong> {c.advice.individual}
          </p>
          <p>
            <strong>Remedies:</strong> {c.advice.remedies}
          </p>
        </div>
      )}
    </div>
  );
}
