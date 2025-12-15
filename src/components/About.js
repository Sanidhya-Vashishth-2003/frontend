import React from "react";
import "../About.css";
import NaveenImg from "../assets/naveen-kaushik.png"; // place image here

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image">
          <img src={NaveenImg} alt="Naveen Kaushik" />
        </div>

        <div className="about-content">
          <h2>About Naveen Kaushik</h2>
          <h4>Founder & Vedic Astrologer – Astronaveen</h4>

          <p>
            <strong>Naveen Kaushik</strong> is a dedicated Vedic astrologer with
            years of experience in guiding people through life’s most important
            decisions using ancient astrological wisdom.
          </p>

          <p>
            He specializes in <strong>Kundali analysis, love & marriage
            predictions, career guidance, planetary remedies, and Panchang
            interpretations</strong>. His approach combines traditional Vedic
            astrology with practical, real-world insights.
          </p>

          <p>
            Through <strong>Astronaveen</strong>, his vision is to make authentic
            astrology accessible, honest, and easy to understand for everyone.
            Each consultation focuses on clarity, confidence, and positive
            transformation.
          </p>

          <div className="about-highlights">
            <span>🕉️ Vedic Astrology</span>
            <span>📜 Kundali & Panchang</span>
            <span>❤️ Love & Marriage</span>
            <span>💼 Career Guidance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
