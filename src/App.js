import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <section id="about" className="section">
        <p><About /></p>
      </section>

      <section id="skills" className="section">
        <p><Skills /></p>
      </section>

      <section id="projects" className="section">
        <p><Projects /></p>
      </section>

      <section id="Contacts" className="section">
        <p><Contacts /></p>
      </section>
    </div>
  );
}

export default App;