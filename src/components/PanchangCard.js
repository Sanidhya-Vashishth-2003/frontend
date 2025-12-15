// frontend/src/components/PanchangCard.js
import React, { useEffect, useState } from "react";
import api from "../api"; // <- this uses axios instance (api.js)

export default function PanchangCard() {
  const [panchang, setPanchang] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPanchang = async () => {
      try {
        const res = await api.get("/api/panchang");
        setPanchang(res.data);
      } catch (err) {
        console.error(err);
        setError("Could not load Panchang. Check if backend is running.");
      }
    };

    fetchPanchang();
  }, []);

  return (
    <div className="card">
      <h3 className="card-title">Daily Panchang</h3>
      <p className="card-subtitle">
        Live tithi, nakshatra, sunrise &amp; sunset from your backend.
      </p>

      {error && (
        <p style={{ color: "#ff8b8b", fontSize: "0.8rem", marginTop: "0.3rem" }}>
          {error}
        </p>
      )}

      {!panchang && !error && <p>Loading...</p>}

      {panchang && (
        <ul className="card-list">
          <li>Date: {panchang.date}</li>
          <li>Tithi: {panchang.tithi}</li>
          <li>Nakshatra: {panchang.nakshatra}</li>
          <li>Yoga: {panchang.yoga}</li>
          <li>Karana: {panchang.karana}</li>
          <li>Sunrise: {panchang.sunrise}</li>
          <li>Sunset: {panchang.sunset}</li>
        </ul>
      )}
    </div>
  );
}
