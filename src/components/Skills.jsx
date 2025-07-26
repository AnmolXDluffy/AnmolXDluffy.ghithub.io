import React from "react";
import CircularProgress from "./CircularProgress";
import AnimatedSectionHeading from "./AnimatedSectionHeading";

const skills = [
  { name: "Python", level: 80 },
  { name: "NumPy", level: 75 },
  { name: "Pandas", level: 75 },
  { name: "SQL", level: 70 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 65 },
  { name: "HTML/CSS", level: 75 },
  { name: "Project Management", level: 80 },
  { name: "Teamwork", level: 85 },
  { name: "Time Management", level: 85 },
  { name: "Analytical Thinking", level: 80 },
  { name: "Critical Thinking", level: 80 },
];

const Skills = () => (
  <section id="skills" className="py-14 bg-black">
    <div className="container mx-auto px-6 overflow-x-hidden">
      <div className="text-center mb-8">
        <AnimatedSectionHeading
          glowClass="hover:glow-emerald focus:glow-emerald"
          gradientColors="from-[#34d399] via-[#38bdf8] to-[#a78bfa]"
        >
          My Skills
        </AnimatedSectionHeading>
        <div className="w-16 h-1 m-2 bg-gradient-to-r from-[#38bdf8] via-[#34d399] to-[#a78bfa] mx-auto"></div>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 justify-center">
        {skills.map(({ name, level }) => (
          <CircularProgress key={name} label={name} percentage={level} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
