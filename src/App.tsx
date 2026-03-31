import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      name: "Sovereign AetherOS",
      description: "The core framework for the Sovereign Protocol.",
      url: "https://github.com/resurrectionofmoses-dev/Sovereign-AetherOS"
    },
    {
      name: "SovereignWebShard",
      description: "The decentralized web interface and front-end gateway.",
      url: "https://github.com/resurrectionofmoses-dev/SovereignWebShard"
    },
    {
      name: "Raven Project",
      description: "Autonomous reconnaissance and security pipeline.",
      url: "https://github.com/resurrectionofmoses-dev/raven_project"
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Sovereign Hub</h1>
        <p>The global directory for resurrectionofmoses-dev</p>
      </header>
      
      <main className="grid">
        {projects.map((project, index) => (
          <a key={index} href={project.url} target="_blank" rel="noreferrer" className="card">
            <h2>{project.name} &rarr;</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </main>
    </div>
  );
}

export default App;
