import './App.css';

function App() {
  const projects = [
    {
      name: "Sovereign AetherOS",
      description: "Core framework for the Sovereign Protocol.",
      url: "https://github.com/resurrectionofmoses-dev/Sovereign-AetherOS"
    },
    {
      name: "SovereignWebShard",
      description: "Decentralized web interface and front-end gateway.",
      url: "https://github.com/resurrectionofmoses-dev/SovereignWebShard"
    },
    {
      name: "Raven Project",
      description: "Autonomous reconnaissance and security pipeline.",
      url: "https://github.com/resurrectionofmoses-dev/raven_project"
    }
  ];

  const shards = [
    {
      name: "Aether Video Refinery (Shards)",
      info: "Extracted video frames and logic sharding.",
      path: "https://github.com/resurrectionofmoses-dev/SovereignPublicHub/releases/latest/download/Aether_Refined_Frames.zip"
    },
    {
      name: "Sovereign Findings (GPG Vault)",
      info: "Recovered research and phone findings (Encrypted).",
      path: "https://github.com/resurrectionofmoses-dev/SovereignPublicHub/releases/latest/download/Sovereign_Findings_Vault.zip.gpg"
    },
    {
      name: "Google Takeout (Cloud Shard 1)",
      info: "Sovereign Cloud Data Access (Encrypted).",
      path: "https://github.com/resurrectionofmoses-dev/SovereignPublicHub/releases/latest/download/google_takeout_vault1.zip.gpg"
    },
    {
      name: "Google Takeout (Cloud Shard 2)",
      info: "Sovereign Cloud Data Access (Encrypted).",
      path: "https://github.com/resurrectionofmoses-dev/SovereignPublicHub/releases/latest/download/google_takeout_vault2.zip.gpg"
    },
    {
      name: "Sovereign Wallet Partition",
      info: "Physical crypto-authority shard (Encrypted).",
      path: "https://github.com/resurrectionofmoses-dev/SovereignPublicHub/releases/latest/download/sovereign_wallet_shard.json.gpg"
    },
    {
      name: "Termux Phone Vault",
      info: "Android ecosystem snapshot (Encrypted).",
      path: "https://github.com/resurrectionofmoses-dev/SovereignPublicHub/releases/latest/download/termux_vault.tar.gz.gpg"
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Sovereign Hub</h1>
        <p>The global directory for resurrectionofmoses-dev</p>
      </header>
      
      <div className="section-header">
        <h2>Repositories</h2>
      </div>
      <div className="grid">
        {projects.map((project, index) => (
          <a key={index} href={project.url} target="_blank" rel="noreferrer" className="card">
            <h2>{project.name} &rarr;</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>

      <div className="section-header">
        <h2>Asset Shards (Obtainable)</h2>
      </div>
      <div className="grid">
        {shards.map((shard, index) => (
          <a key={index} href={shard.path} download className="card shard">
            <h3>{shard.name}</h3>
            <p>{shard.info}</p>
            <span className="badge">{shard.path.endsWith('.gpg') ? '🔐 ENCRYPTED' : '📂 OPEN'}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
