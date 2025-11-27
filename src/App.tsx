import React from 'react';
// import Hero from './components/Hero';
import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="portfolio">
      {/* <Hero />
      <Skills /> */}
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default App;