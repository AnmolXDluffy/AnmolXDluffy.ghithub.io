import AnimatedSectionHeading from "./AnimatedSectionHeading";

const About = () => (
  <section id="about" className="py-16 bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/3 top-0 w-96 h-96 rounded-full bg-gradient-to-br from-green-400 via-blue-400 to-violet-300 blur-3xl opacity-20 animate-blob1" />
      <div className="absolute left-2/3 top-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-400 via-emerald-400 to-blue-300 blur-2xl opacity-15 animate-blob2" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center mb-6">
        <div className="z-10 relative">
          <img
  src="/mypfp.jpg"
  alt="My pic"
  className="
    w-40 h-40 rounded-full ring-4 ring-blue-400 shadow-xl
    transition-transform duration-300
    hover:scale-105 hover:ring-emerald-500 hover:shadow-2xl
    object-cover object-center
  "
/>
        </div>
      </div>
      <div className="text-center mb-8">
        <AnimatedSectionHeading
          glowClass="hover:glow-blue focus:glow-blue"
          gradientColors="from-[#38bdf8] via-[#a78bfa] to-[#34d399]"
        >
          About Me
        </AnimatedSectionHeading>
        <div className="w-20 h-1 m-2 bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#34d399] mx-auto mb-6"></div>
      </div>
      <div className="max-w-xl mx-auto text-center mb-8">
        <p className="text-lg text-gray-200 leading-relaxed mt-2 drop-shadow">
          I am a Computer Science Engineering student pursuing an internship in data analytics. B.Tech student passionate about data analytics, web development, and transforming data into actionable insights.<br />
          Solid foundation in Python, SQL, and data visualization.<br />
          Seeking growth through hands-on projects and teamwork.
        </p>
      </div>
      <div className="max-w-3xl mx-auto text-left bg-[#171924]/80 rounded-xl p-7 border border-blue-800 shadow-lg backdrop-blur-md">
        <h3
          className="
            text-2xl font-semibold mb-4 animate-gradient-x bg-gradient-to-r from-blue-400 via-green-200 to-violet-400 
            bg-clip-text text-transparent
          "
        >
          Education
        </h3>
        <ul className="list-disc list-inside text-gray-100/90">
          <li>
            <strong>Bachelor of Technology (BTech)</strong>, Computer Science Engineering<br />
            CT University, Ludhiana (2022–2026)
          </li>
          <li><strong>12th (73%)</strong>, BCM SEN SEC SCHOOL, Ludhiana (2021–2022)</li>
          <li><strong>10th (73%)</strong>, BCM SEN SEC SCHOOL, Ludhiana (2019–2020)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
