import AnimatedSectionHeading from "./AnimatedSectionHeading";

const projects = [
  {
    title: "Auto Heavens (Social Interaction Website)",
    company: "Sensation Company, Mohali",
    date: "Jun 2024 – Jul 2024",
    description:
      "Created and managed the project Auto Heavens, participated in two hackathons leading the team. Projects included E-Commerce Website and Real-time Chat with FaceTime.",
  },
  {
    title: "Capstone: Restaurant Ranking System",
    company: "CT University",
    date: "",
    description:
      "Built a ranking system for a restaurant menu, leading backend development and sharing all aspects of the process.",
  },
  {
    title: "Flappy-Bird Side Project",
    company: "",
    date: "Jul 2023",
    description:
      "Self-taught project implementing Flappy-Bird as a web game using modern web technologies.",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-black relative">
    <div className="container mx-auto px-6 overflow-x-hidden relative z-10">
      <div className="text-center mb-12">
        <AnimatedSectionHeading
          glowClass="hover:glow-orange focus:glow-orange"
          gradientColors="from-[#fbbf24] via-[#38bdf8] to-[#a78bfa]"
        >
          Projects & Hackathons
        </AnimatedSectionHeading>
        <div className="w-20 h-1 m-2 bg-gradient-to-r from-[#fbbf24] via-[#38bdf8] to-[#a78bfa] mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(({ title, company, date, description }) => (
          <div
            key={title}
            className="bg-[#18181b]/90 rounded-lg shadow-lg p-6 border border-blue-800 transition hover:scale-105 animate-fadeIn hover:ring-2 hover:ring-blue-400"
          >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text animate-gradient-x drop-shadow">
              {title}
            </h3>
            <p className="mt-1 text-gray-400 text-xs">
              {company}
              {date && ` | ${date}`}
            </p>
            <p className="mt-2 text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
