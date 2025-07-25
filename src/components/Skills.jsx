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
  <section id="skills" className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="max-w-3xl mx-auto grid gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
              <span className="text-blue-600 font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Skills;
