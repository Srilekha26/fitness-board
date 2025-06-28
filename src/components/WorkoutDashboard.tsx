// src/components/WorkoutDashboard.tsx

"use client";

import React, { useState } from "react";
import workoutData from "@/data/workoutData";
import { WorkoutDay } from "@/types/workout";

export default function WorkoutDashboard() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const workoutDay: WorkoutDay = workoutData[selectedDayIndex];
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const sectionStyle: React.CSSProperties = {
    padding: "16px 20px",
    margin: "16px auto",
    backgroundColor: "#1f2937",
    color: "#ffffff",
    border: "1px solid #374151",
    borderRadius: "24px",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "900px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#111827",
    color: "#f3f4f6",
    borderRadius: "20px",
    padding: "24px",
    margin: "16px",
    border: "1px solid #374151",
    width: "320px",
    boxShadow: "2px 4px 16px rgba(0, 0, 0, 0.3)",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    verticalAlign: "top",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    position: "relative",
  };

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "12px" }}>
          💪 My Functional Home Workout Plan
        </h1>
        <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "20px" }}>
          Stay consistent and track your progress.
        </p>
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "12px 16px",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <span role="img" aria-label="calendar">📅</span>
          <select
            value={selectedDayIndex}
            onChange={(e) => setSelectedDayIndex(Number(e.target.value))}
            style={{
              backgroundColor: "#1e293b",
              color: "#f8fafc",
              border: "none",
              fontSize: "16px",
              padding: "4px 8px",
              borderRadius: "8px",
            }}
          >
            {workoutData.map((opt, index) => (
              <option
                key={opt.day}
                value={index}
                style={{ backgroundColor: "#1e293b", color: "#f8fafc" }}
              >
                {opt.day}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "1000px" }}>
        {[{
          title: "🚶 Warm-Up",
          data: workoutDay.warmup
        }, {
          title: "🧠 Foundational Movements",
          data: workoutDay.foundational
        }, {
          title: "🏗️ Block A: Compound Strength",
          data: workoutDay.blockA
        }, {
          title: "🤸 Block B: Functional Focus",
          data: workoutDay.blockB
        }, {
          title: "⚡ Finisher",
          data: workoutDay.finisher
        }, {
          title: "🧘‍♂️ Stretch + Breath Cooldown",
          data: workoutDay.cooldown
        }].map(({ title, data }) => (
          <div key={title} style={{ marginBottom: "20px", width: "100%" }}>
            <div
              onClick={() => toggleSection(title)}
              style={{ ...sectionStyle, backgroundColor: openSections[title] ? "#374151" : "#1f2937" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#475569")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = openSections[title] ? "#374151" : "#1f2937")}
            >
              <span>{openSections[title] ? `▼ ${title}` : `▶ ${title}`}</span>
            </div>
           {openSections[title] && (
  <div style={{ 
    textAlign: "center", 
    marginTop: "10px", 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", 
    gap: "24px", 
    justifyItems: "center" 
  }}>
    {data.map((ex, i) => (
      <div
        key={i}
        style={cardStyle}
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1.0)")}
      >
        {/* Top: Placeholder or GIF */}
        <img
          src={ex.gif || "/images/human-grey-placeholder.png"}
          alt={ex.name}
          style={{ width: "160px", height: "160px", borderRadius: "16px", marginBottom: "14px", objectFit: "cover" }}
        />
        {/* Name and green dot */}
        <div style={{ 
  display: "flex", 
  justifyContent: "flex-start", 
  alignItems: "center", 
  gap: "10px", 
  marginBottom: "8px", 
  width: "100%" 
}}>
  <span style={{ fontWeight: "bold", fontSize: "16px" }}>{ex.name}</span>
  <span style={{ width: "10px", height: "10px", backgroundColor: "#10b981", borderRadius: "50%" }}></span>
</div>
        {/* Extra info from ExerciseCard */}
        <div style={{ textAlign: "left", width: "100%" }}>
          <p style={{ fontSize: "14px", color: "#a3e635", margin: 0 }}>
  {ex.reps
    ? `Reps: ${ex.reps}`
    : ex.time
      ? `Time: ${ex.time}`
      : ""}
</p>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>Targets: {ex.muscles}</p>
          {ex.purpose && (
            <p style={{ fontSize: "12px", color: "#10b981", fontStyle: "italic", margin: 0 }}>Purpose: {ex.purpose}</p>
          )}
          {ex.highlightImage && (
            <img
              src={ex.highlightImage}
              alt={`Muscle highlight for ${ex.name}`}
              style={{ width: "60px", height: "auto", marginTop: "8px", borderRadius: "6px" }}
            />
          )}
        </div>
      </div>
    ))}
  </div>
)}
          </div>
        ))}
      </div>
    </div>
  );
}