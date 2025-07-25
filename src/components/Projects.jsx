const projects = [
  {
    title: "Mern Stack (Training) – Auto Heavens",
    description: "Created and managed the project Auto Heavens, a social interaction website during training at Sensation Company, Mohali.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Capstone Group Project – Restaurant Ranking System",
    description: "Created a project for a restaurant that involved ranking various menu items. Led a team, shared development responsibilities, and made significant backend contributions.",
    tech: ["Python", "SQL", "Data Analytics"],
    link: "#"
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    description: "Completed 11-course series on Coursera, gaining experience in data analysis using Python (NumPy, Pandas), visualization, and foundational tools like Matplotlib and Seaborn.",
    tech: ["Python", "IBM Data Analytics", "Pandas", "Numpy", "Seaborn", "Matplotlib"],
    link: "#"
  },
  {
    title: "Web Development at CT University",
    description: "Built responsive interfaces using HTML, CSS, Bootstrap, React, and Node.js as part of university training.",
    tech: ["HTML", "CSS", "Bootstrap", "React", "Node.js"],
    link: "#"
  },
  {
    title: "Hackathons & Team Leadership",
    description: "Participated in two hackathons—created an E-Commerce website and led teams, implemented payment gateways, and contributed to server-side logic and API integration.",
    tech: ["Team Leadership", "Fullstack", "API Development"],
    link: "#"
  }
];

const Projects = () => (
  <section id="projects" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="h-32 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, ti) => (
                  <span key={ti} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Projects;
