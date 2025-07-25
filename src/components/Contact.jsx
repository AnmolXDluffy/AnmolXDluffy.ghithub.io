const Contact = () => (
  <section id="contact" className="py-16 bg-gray-800 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
      <p className="mb-6">I'm open to opportunities and collaborations!</p>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-blue-400 mb-8">
        <a href="mailto:anmol123124@gmail.com" className="hover:underline">Email</a>
        <a href="tel:+919417464851" className="hover:underline">Phone</a>
        <a href="https://github.com/AnmolXDluffy" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      </div>
      <div className="text-gray-400 text-sm">
        Location: Ludhiana, Punjab · &copy; {new Date().getFullYear()} Anmol Kumar
      </div>
    </div>
  </section>
);
export default Contact;
