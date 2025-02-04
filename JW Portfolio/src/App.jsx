
import styles from './App.module.css';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/Hero/Hero.jsx';
import { About } from './components/About/About.jsx';
import { Expirience } from './components/Expirience/Expirience.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Contact } from './components/Contact/Contact.jsx';

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Expirience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
