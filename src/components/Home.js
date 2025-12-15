import React from "react";
import PanchangCard from "./PanchangCard";
import KundaliChatbot from "./KundaliChatbot";
import AppointmentForm from "./AppointmentForm";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div>
          <h1 className="hero-heading">
            Welcome to <span className="hero-gradient">Astronaveen</span>
          </h1>
          <p className="hero-subtitle">
            Vedic-style insights for your love life, career and personal growth —
            guided by astrologer <strong>Naveen Kaushik</strong>.
          </p>

          <div className="hero-badges">
            <button className="badge" onClick={() => navigate("/services")}>
              Astrology Services
            </button>
            <button className="badge" onClick={() => navigate("/services")}>
              Kundali Insights
            </button>
            <button className="badge" onClick={() => navigate("/services")}>
              Consultations
            </button>
            <button className="badge" onClick={() => navigate("/services")}>
              Love · Career · Finance
            </button>
          </div>

          <p className="hero-highlight">
            Start with a basic online reading below, then book a personal session for a
            detailed kundali and remedies.
          </p>
        </div>

        <div className="hero-card">
          <div className="hero-card-title">Today&apos;s Cosmic Snapshot</div>
          <p className="hero-card-body">
            Tithi, Nakshatra, sunrise and sunset form the energetic backdrop of your
            day. Aligning your actions with this rhythm can bring more clarity and ease.
          </p>
          <p className="hero-card-kpi">
            ✨ Ideal for: starting new work, relationship clarity &amp; big decisions.
          </p>
        </div>
      </section>

      {/* INTERACTIVE CARDS */}
      <section className="card-grid">
        <PanchangCard />
        <KundaliChatbot />
        <AppointmentForm />
      </section>
    </>
  );
}
