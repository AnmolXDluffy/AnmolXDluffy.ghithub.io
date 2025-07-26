import React, { useState } from "react";

// Color mapping for unique gradients and glow shadows
const colorMap = {
  Python: { from: "#facc15", to: "#f59e42", glow: "shadow-yellow-400" },
  NumPy: { from: "#0284c7", to: "#38bdf8", glow: "shadow-sky-400" },
  Pandas: { from: "#a21caf", to: "#f472b6", glow: "shadow-fuchsia-400" },
  SQL: { from: "#64748b", to: "#a3e635", glow: "shadow-lime-400" },
  JavaScript: { from: "#fde047", to: "#fbbf24", glow: "shadow-yellow-300" },
  React: { from: "#06b6d4", to: "#3b82f6", glow: "shadow-cyan-400" },
  "HTML/CSS": { from: "#fb7185", to: "#f472b6", glow: "shadow-pink-400" },
  "Project Management": { from: "#f59e42", to: "#a21caf", glow: "shadow-orange-400" },
  Teamwork: { from: "#14b8a6", to: "#0ea5e9", glow: "shadow-teal-400" },
  "Time Management": { from: "#d946ef", to: "#7c3aed", glow: "shadow-purple-400" },
  "Analytical Thinking": { from: "#4ade80", to: "#3b82f6", glow: "shadow-green-400" },
  "Critical Thinking": { from: "#fbbf24", to: "#ef4444", glow: "shadow-red-400" },
};

const CircularProgress = ({ percentage, label }) => {
  const [hovered, setHovered] = useState(false);

  const radius = 40;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const colors = colorMap[label] || { from: "#0ea5e9", to: "#a21caf", glow: "shadow-sky-400" };

  return (
    <div
      className={`relative flex flex-col items-center group cursor-pointer transition-all duration-300 w-32 h-32
        ${hovered ? `scale-110 shadow-2xl ${colors.glow}` : ""}`}
      style={{ margin: "8px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg height={radius * 2} width={radius * 2} className="block">
        <circle
          stroke="#374151"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={`url(#gradient-${label.replace(/\W/g, "")})`}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={`transition-all duration-700 ease-out ${hovered ? "glow-ring" : ""}`}
        />
        <defs>
          <linearGradient id={`gradient-${label.replace(/\W/g, "")}`} x1="1" y1="0" x2="0" y2="1">
            <stop stopColor={colors.from} />
            <stop offset="100%" stopColor={colors.to} />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage number: centered, scales and glows on hover */}
      <span
  className={`
    absolute font-bold transition-all duration-300 text-xl
    left-1/2
    ${hovered ? "scale-125 animate-pulseGlow shadow-lg" : ""}
    -translate-x-1/2
  `}
  style={{
    right: "35%",
    top: "28%", // moves the number up inside the circle (default is 50%)
    color: "#fff",
    zIndex: 1,
    pointerEvents: "none",
    transform: "translate(-50%, -40%)", // keep it horizontally centered, a bit higher vertically
  }}
>
  {percentage}%
</span>

      {/* Skill label */}
      <span
        className="mt-3 text-sm font-semibold text-gray-200 whitespace-nowrap text-center"
        style={{
          maxWidth: 120,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default CircularProgress;
