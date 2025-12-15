// frontend/src/components/KundaliChatbot.js
import React, { useState } from "react";
import api from "../api";

// small Western zodiac helper (extra info only)
function getZodiacSign(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  const day = d.getDate();
  const month = d.getMonth() + 1;

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries ♈";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus ♉";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini ♊";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer ♋";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo ♌";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo ♍";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra ♎";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio ♏";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius ♐";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn ♑";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius ♒";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces ♓";
  return "";
}

export default function KundaliChatbot() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    time: "",
    place: "",
    birthplace: "",
  });

  const [zodiac, setZodiac] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (name === "dob") setZodiac(getZodiacSign(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await api.post("/api/kundali", {
        ...form,
        approxSunSign: zodiac,
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Error generating kundali. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="card-title">Kundali Chatbot</h3>
      <p className="card-subtitle">
        Enter your birth details to receive a Vedic-style personality snapshot, dosha
        overview, Sade Sati note and future trend summary. This is a structured demo
        prepared for real astrology integration.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ fontSize: "0.85rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />
        {zodiac && (
          <p style={{ marginTop: "0.2rem", color: "#ffca3a", fontSize: "0.85rem" }}>
            Approx Western Sun Sign: <strong>{zodiac}</strong>
          </p>
        )}
        <label>Time of Birth</label>
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="place"
          placeholder="Current City"
          value={form.place}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="birthplace"
          placeholder="Birthplace (City, Country)"
          value={form.birthplace}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
          style={{ marginTop: "0.6rem" }}
        >
          {loading ? "Generating..." : "Generate Kundali"}
        </button>
      </form>

      {error && (
        <p style={{ color: "#ff8b8b", marginTop: "0.4rem", fontSize: "0.8rem" }}>
          {error}
        </p>
      )}

      {/* RESULT */}
      {result && (
        <div
          style={{
            marginTop: "1rem",
            paddingTop: "0.7rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: "0.85rem",
          }}
        >
          <h4>Chart Overview</h4>
          <p>
            <strong>Sun Sign:</strong> {result.sunSign}
          </p>
          <p>
            <strong>Moon Sign:</strong> {result.moonSign}
          </p>
          <p>
            <strong>Ascendant (Lagna):</strong> {result.ascendant}
          </p>

          {result.kundaliImageUrl && (
            <div style={{ marginTop: "0.6rem" }}>
              <p style={{ marginBottom: "0.3rem" }}>Kundali Chart (Demo):</p>
              <img
                src={result.kundaliImageUrl}
                alt="Kundali chart"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </div>
          )}

          <h4 style={{ marginTop: "0.8rem" }}>Behaviour & Personality</h4>
          <p>{result.behaviour?.summary}</p>
          <ul className="card-list">
            {result.behaviour?.strengths?.map((s, i) => (
              <li key={"str" + i}>+ {s}</li>
            ))}
            {result.behaviour?.challenges?.map((c, i) => (
              <li key={"ch" + i}>⚠ {c}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: "0.8rem" }}>Life Areas</h4>
          <p>
            <strong>Love & Relationships:</strong> {result.lifeAreas?.love?.present}
            {" "}
            <br />
            <strong>Future:</strong> {result.lifeAreas?.love?.future}
          </p>
          <p>
            <strong>Career:</strong> {result.lifeAreas?.career?.present}
            {" "}
            <br />
            <strong>Future:</strong> {result.lifeAreas?.career?.future}
          </p>
          <p>
            <strong>Health:</strong> {result.lifeAreas?.health?.present}
            {" "}
            <br />
            <strong>Future:</strong> {result.lifeAreas?.health?.future}
          </p>
          <p>
            <strong>Finance:</strong> {result.lifeAreas?.finance?.present}
            {" "}
            <br />
            <strong>Future:</strong> {result.lifeAreas?.finance?.future}
          </p>

          <h4 style={{ marginTop: "0.8rem" }}>Dosha Overview</h4>
          <p>
            <strong>Manglik:</strong> {result.dosha?.manglik}
          </p>
          <p>
            <strong>Kaal Sarp:</strong> {result.dosha?.kaalSarp}
          </p>
          <p>
            <strong>Pitra Dosha:</strong> {result.dosha?.pitraDosha}
          </p>
          <p>
            <strong>Other:</strong> {result.dosha?.other}
          </p>

          <h4 style={{ marginTop: "0.8rem" }}>Sade Sati</h4>
          <p>
            <strong>Status:</strong> {result.sadeSati?.status}
          </p>
          <p>{result.sadeSati?.description}</p>

          <h4 style={{ marginTop: "0.8rem" }}>Future Trends</h4>
          <p>
            <strong>Next 12 months:</strong> {result.future?.next12Months}
          </p>
          <p>
            <strong>Next 2–3 years:</strong> {result.future?.next3Years}
          </p>

          <h4 style={{ marginTop: "0.8rem" }}>Simple Remedies</h4>
          <p>
            <strong>General:</strong> {result.remedies?.general}
          </p>
          <p>
            <strong>Love:</strong> {result.remedies?.love}
          </p>
          <p>
            <strong>Career:</strong> {result.remedies?.career}
          </p>
          <p>
            <strong>Spiritual:</strong> {result.remedies?.spiritual}
          </p>

          <h4 style={{ marginTop: "0.8rem" }}>Lucky Factors</h4>
          <p>
            <strong>Lucky Number:</strong> {result.lucky?.number}
          </p>
          <p>
            <strong>Lucky Color:</strong> {result.lucky?.color}
          </p>
          <p>
            <strong>Lucky Day:</strong> {result.lucky?.day}
          </p>
        </div>
      )}
    </div>
  );
}
