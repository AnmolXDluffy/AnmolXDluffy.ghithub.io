import AnimatedSectionHeading from "./AnimatedSectionHeading";

const Contact = () => (
  <section
    id="contact"
    className="py-16 bg-gradient-to-r from-black via-blue-950 to-black text-white relative"
  >
    <div className="container mx-auto px-6 overflow-x-hidden text-center relative z-10">
      <AnimatedSectionHeading
        glowClass="hover:glow-rose focus:glow-rose"
        gradientColors="from-[#fb7185] via-[#38bdf8] to-[#34d399]"
      >
        Contact
      </AnimatedSectionHeading>
      
      <div className="w-20 h-1 m-2 bg-gradient-to-r from-[#fb7185] via-[#38bdf8] to-[#34d399] mx-auto mb-6"></div>
      <div className="flex justify-center">
  <img
    src="https://www.dropbox.com/scl/fi/pvzl2ubjaadnsc481tg1q/ak.jpg?rlkey=tsw0l8dirrygdcfmsxzhe2qza&st=3j0gsx03&dl=0"
    alt="My pic"
    className="w-11 h-11 rounded-full ring-4 ring-blue-400 shadow-xl
      transition-transform duration-300
      hover:scale-105 hover:ring-emerald-500 hover:shadow-2xl object-cover object-center"
  />
</div>

      <p className=" m-6 text-gray-200">I'm open to opportunities and collaborations!</p>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-blue-300 mb-8">
        <a
          href="mailto:anmol123124@gmail.com"
          className="hover:underline hover:text-pink-400"
        >
          Email
        </a>
        <a
          href="tel:+919417464851"
          className="hover:underline hover:text-green-400"
        >
          Phone
        </a>
        <a
          href="https://github.com/AnmolXDluffy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-purple-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>
      <div className="text-gray-400 text-sm">
        Location: Ludhiana, Punjab · &copy; {new Date().getFullYear()} Anmol Kumar
      </div>
    </div>
  </section>
);

export default Contact;
