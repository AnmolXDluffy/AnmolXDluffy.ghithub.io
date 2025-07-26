const AnimatedSectionHeading = ({ children, glowClass = "", gradientColors = "" }) => (
  <h2
    className={`
      text-3xl md:text-4xl font-extrabold
      bg-gradient-to-r ${gradientColors}
      animate-gradient-x text-transparent bg-clip-text
      transition duration-300 cursor-pointer
      hover:scale-105 focus:scale-105
      ${glowClass} drop-shadow-lg mt-0
    `}
    tabIndex={0}
  >
    {children}
  </h2>
);

export default AnimatedSectionHeading;
