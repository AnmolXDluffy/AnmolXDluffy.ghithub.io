const Hero = () => (
  <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-blue-900 via-violet-900 to-emerald-900 text-white text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400 via-violet-300 to-emerald-400 opacity-25 blur-3xl animate-blob1 pointer-events-none"></div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-violet-400 to-green-300 bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient-x drop-shadow-lg">
      Hi, I'm Anmol Kumar
    </h1>
    <p className="text-xl mb-4 text-gray-200">Computer Science Engineering Student & Data Enthusiast</p>
    <p className="mb-8 opacity-90 text-gray-300">
      Passionate about transforming data into actionable insights, building scalable solutions with Python, and developing analytical web applications.
    </p>
    <a href="#projects" className="px-8 py-3 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">View Projects</a>
  </section>
);

export default Hero;
