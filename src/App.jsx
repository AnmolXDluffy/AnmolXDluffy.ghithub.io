import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Header />
      <main className="pt-15">
        <Hero />
        <About />
        <Hobbies />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
