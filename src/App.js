import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <section id="about" className="section">
        <h2>About Section</h2>
        <p><About /></p>
      </section>

      <section id="skills" className="section">
        <h2>Skills Section</h2>
        <p><Skills /></p>
      </section>

      <section id="projects" className="section">
        <h2>Projects Section</h2>
        <p><Projects /></p>
      </section>

      <section id="Contacts" className="section">
        <h2>Contact Section</h2>
        <p><Contacts /></p>
      </section>
    </div>
  );
}

export default App;