import AnimatedSectionHeading from "./AnimatedSectionHeading";

const Hobbies = () => (
  <section id="hobbies" className="py-12 bg-black">
    <div className="container mx-auto px-6 overflow-x-hidden text-center">
      <AnimatedSectionHeading
        glowClass="hover:glow-violet focus:glow-violet"
        gradientColors="from-[#a78bfa] via-[#34d399] to-[#fb7185]"
      >
        Hobbies & Interests
      </AnimatedSectionHeading>
      <div className="w-20 h-1 m-2 bg-gradient-to-r from-[#a78bfa] via-[#34d399] to-[#fb7185] mx-auto mb-6"></div>
      <ul className="inline-block text-left text-gray-300 rounded-lg bg-[#18181b]/80 px-8 py-6 shadow-lg border border-blue-700 backdrop-blur">
        <li>Gaming</li>
        <li>Watching Anime</li>
        <li>Reading</li>
        <li>Fitness Enthusiast</li>
      </ul>
    </div>
  </section>
);

export default Hobbies;
