const Header = () => (
  <header className="fixed w-full bg-white shadow z-20">
    <nav className="container mx-auto flex justify-between items-center px-6 py-4">
      <div className="text-2xl font-bold text-gray-800">Anmol Kumar</div>
      <div className="space-x-4 hidden md:flex">
        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
        <a href="#hobbies" className="text-gray-600 hover:text-blue-600">Hobbies</a>
        <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
        <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  </header>
);
export default Header;
