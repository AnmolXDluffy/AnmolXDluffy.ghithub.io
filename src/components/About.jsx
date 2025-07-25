const About = () => (
  <section id="about" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg text-gray-600 leading-relaxed">
          I am a Computer Science Engineering student pursuing an internship in data analytics...
        </p>
      </div>
      <div className="max-w-3xl mx-auto text-left">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Education</h3>
        <ul className="list-disc list-inside text-gray-700">
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
