import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Hobbies />     
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
