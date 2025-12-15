import React from "react";
import KundaliChatbot from "./KundaliChatbot";

export default function KundaliPage() {
  return (
    <div className="page">
      <h1 style={{ marginBottom: "0.8rem" }}>Kundali Chatbot</h1>
      <p style={{ color: "#d9dcff", marginBottom: "1rem", fontSize: "0.95rem" }}>
        Enter your birth details to get your Sun sign, Moon sign, Vedic-style personality
        overview, dosha indicators, Sade Sati information and future trend summary.
        This page is dedicated only to your kundali reading.
      </p>

      <KundaliChatbot />
    </div>
  );
}
