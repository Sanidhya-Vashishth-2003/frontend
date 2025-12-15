import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const goToBooking = () => {
    // send user back to home where the appointment form is
    navigate("/");
    // if you later move the form to a separate page, change this route
  };

  return (
    <div className="page">
      <h1 style={{ marginBottom: "1.2rem" }}>Astrology Services</h1>
      <p style={{ marginBottom: "1rem", color: "#d9dcff" }}>
        Choose the type of guidance you need. All sessions are done personally by
        <strong> Naveen Kaushik</strong> with a mix of kundali analysis, intuition and
        practical advice.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3 className="card-title">Love &amp; Relationship</h3>
          <p className="card-subtitle">
            For clarity on attraction, compatibility, breakups and marriage timing.
          </p>
          <ul className="card-list">
            <li>Compatibility &amp; long-term potential</li>
            <li>Recurring patterns in love life</li>
            <li>Support during breakups / confusion</li>
          </ul>
          <button className="btn btn-primary" onClick={goToBooking} style={{ marginTop: "0.6rem" }}>
            Book Relationship Session
          </button>
        </div>

        <div className="card">
          <h3 className="card-title">Career Prediction</h3>
          <p className="card-subtitle">
            For job changes, business ideas, exams or feeling stuck in career.
          </p>
          <ul className="card-list">
            <li>Best career direction based on chart</li>
            <li>Good periods for switch or promotion</li>
            <li>Remedies for delays / blocks</li>
          </ul>
          <button className="btn btn-primary" onClick={goToBooking} style={{ marginTop: "0.6rem" }}>
            Book Career Session
          </button>
        </div>

        <div className="card">
          <h3 className="card-title">Finance &amp; Business</h3>
          <p className="card-subtitle">
            For business start, investment timing and money flow patterns.
          </p>
          <ul className="card-list">
            <li>Money mindset &amp; risk tendencies</li>
            <li>Better timing for launches / deals</li>
            <li>Guidance on stability vs. aggression </li>
          </ul>
          <button className="btn btn-primary" onClick={goToBooking} style={{ marginTop: "0.6rem" }}>
            Book Finance Session
          </button>
        </div>

        <div className="card">
          <h3 className="card-title">Personal Kundali</h3>
          <p className="card-subtitle">
            Full reading of your birth chart with life themes &amp; upcoming cycles.
          </p>
          <ul className="card-list">
            <li>Main strengths &amp; blind spots</li>
            <li>Love, career &amp; family overview</li>
            <li>12–18 month future trend reading</li>
          </ul>
          <button className="btn btn-primary" onClick={goToBooking} style={{ marginTop: "0.6rem" }}>
            Book Full Kundali Session
          </button>
        </div>
      </div>

      <p style={{ marginTop: "1.3rem", fontSize: "0.9rem", color: "#b5b9f0" }}>
        After choosing a service, click on any “Book Session” button. You&apos;ll be taken
        to the home page where you can submit your details in the appointment form.
      </p>
    </div>
  );
}
