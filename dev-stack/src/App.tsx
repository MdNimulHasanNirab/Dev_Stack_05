import React, { useState } from 'react';
import './index.css';
import './app.css';

interface TechItem {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  rating: number;
  badge: string;
  badgeColor: string;
  iconBg: string;
  iconSvg: React.ReactNode;
}

const TECH_DATA: TechItem[] = [
  {
    id: 'react',
    name: 'React',
    description: 'A JavaScript library for building user interfaces with modern component architecture.',
    category: 'Frontend',
    difficulty: 'Beginner Friendly',
    rating: 4.9,
    badge: 'Popular',
    badgeColor: '#e0f2fe',
    iconBg: '#00d8ff',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'An approachable, performant, and versatile framework for building web interfaces.',
    category: 'Frontend',
    difficulty: 'Beginner Friendly',
    rating: 4.8,
    badge: 'Versatile',
    badgeColor: '#dcfce7',
    iconBg: '#41b883',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3z" />
        <path d="M6.5 3h3L12 8.5 14.5 3h3L12 13 6.5 3z" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'svelte',
    name: 'Svelte',
    description: 'Cybernetically enhanced web apps with compile-time reactivity and zero DOM overhead.',
    category: 'Frontend',
    difficulty: 'Intermediate',
    rating: 4.8,
    badge: 'Fast',
    badgeColor: '#ffedd5',
    iconBg: '#ff3e00',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L18 8v8l-6 3-6-3V8l6-3.2z" />
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'The React framework for full-stack web applications with hybrid static & server rendering.',
    category: 'Fullstack',
    difficulty: 'Intermediate',
    rating: 4.9,
    badge: 'SSR / Edge',
    badgeColor: '#f3e8ff',
    iconBg: '#000000',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 8v8l7-8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: 'Backend',
    difficulty: 'Intermediate',
    rating: 4.8,
    badge: 'Standard',
    badgeColor: '#dcfce7',
    iconBg: '#339933',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1v7.2L12 19.7l-7.5-4.1V8.4L12 4.3z" />
      </svg>
    ),
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    description: 'A powerful open source object-relational database system with high reliability and speed.',
    category: 'Database',
    difficulty: 'Intermediate',
    rating: 4.9,
    badge: 'Top SQL',
    badgeColor: '#e0f2fe',
    iconBg: '#336791',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 3C7 3 3 5.2 3 8v8c0 2.8 4 5 9 5s9-2.2 9-5V8c0-2.8-4-5-9-5zm0 2c3.9 0 7 1.3 7 3s-3.1 3-7 3-7-1.3-7-3 3.1-3 7-3zm0 14c-3.9 0-7-1.3-7-3v-2.2c1.8 1.4 4.3 2.2 7 2.2s5.2-.8 7-2.2V16c0 1.7-3.1 3-7 3z" />
      </svg>
    ),
  },
  {
    id: 'redis',
    name: 'Redis',
    description: 'In-memory data structure store used as a high-speed database, cache, and message broker.',
    category: 'Database',
    difficulty: 'Intermediate',
    rating: 4.8,
    badge: 'Cache',
    badgeColor: '#fee2e2',
    iconBg: '#dc382d',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M4 6l8-4 8 4-8 4-8-4zm0 6l8 4 8-4-8-4-8 4zm0 6l8 4 8-4-8-4-8 4z" />
      </svg>
    ),
  },
  {
    id: 'js',
    name: 'JavaScript',
    description: 'The versatile, ubiquitous programming language powering dynamic behavior across the web.',
    category: 'Language',
    difficulty: 'Beginner Friendly',
    rating: 4.7,
    badge: 'Ubiquitous',
    badgeColor: '#fef9c3',
    iconBg: '#f7df1e',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E" />
        <path d="M12 16.5c0 1.5.8 2.2 2 2.2 1.3 0 1.9-.7 1.9-2v-4.5h2v4.5c0 2.4-1.5 3.8-3.9 3.8-2.3 0-3.8-1.3-3.8-3.7h1.8z" fill="#000" />
      </svg>
    ),
  },
  {
    id: 'ts',
    name: 'TypeScript',
    description: 'Strongly typed programming language that builds on JavaScript for better developer tooling.',
    category: 'Language',
    difficulty: 'Intermediate',
    rating: 4.9,
    badge: 'Essential',
    badgeColor: '#e0f2fe',
    iconBg: '#3178c6',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178C6" />
        <path d="M7 9h6v2h-2v6H9v-6H7V9zm7 0h4v2h-4v1.5h3v2h-3V17h4v2h-6V9z" fill="#FFF" />
      </svg>
    ),
  },
  {
    id: 'java',
    name: 'Java',
    description: 'A secure, object-oriented programming language designed for enterprise scale and speed.',
    category: 'Language',
    difficulty: 'Intermediate',
    rating: 4.6,
    badge: 'Robust',
    badgeColor: '#e0f2fe',
    iconBg: '#5382a1',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M9 19c0 0-1 1 3 1s4-1 4-1-1 2-4 2-3-2-3-2zm-1-3c0 0-1.5 1.5 4 1.5s5-1.5 5-1.5-1.5 2-5 2-4-2-4-2zm8.5-5.5c0 0 1 1-1 2.5s-4 1.5-6 1.5-4.5-.5-3.5-2 3.5-2 3.5-2 4.5.5 7 0z" />
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework packed with classes that can be composed to build any design.',
    category: 'Styling',
    difficulty: 'Beginner Friendly',
    rating: 4.8,
    badge: 'Modern',
    badgeColor: '#e0f2fe',
    iconBg: '#38bdf8',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'A platform designed to build, share, and run applications in lightweight containers.',
    category: 'DevOps',
    difficulty: 'Intermediate',
    rating: 4.9,
    badge: 'Containers',
    badgeColor: '#e0f2fe',
    iconBg: '#2496ed',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm-3 3h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zM1 14c0 3 3 6 10 6s11-2.5 12-6c-1 0-2 .5-3 1-1.5 1-4 1-5-1H1z" />
      </svg>
    ),
  },
];

export default function App() {
  const [selectedTechs, setSelectedTechs] = useState<TechItem[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSelectTech = (tech: TechItem) => {
    if (selectedTechs.some((t) => t.id === tech.id)) {
      setSelectedTechs(selectedTechs.filter((t) => t.id !== tech.id));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const removeTech = (id: string) => {
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-brand">
          <div className="brand-icon">DS</div>
          <span className="brand-text">
            Dev<span className="brand-highlight">Stack</span>
          </span>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Sign Up</button>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your Ideal <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p className="hero-subtitle">
            Explore frontend, backend, database, and tooling options, compare them side-by-side,
            and put together the stack that fits your next project.
          </p>
          <div className="hero-buttons">
            <button className="btn-accent">Explore Technologies</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="isometric-stack-card">
            <div className="iso-layer layer-3">
              <span className="iso-badge">Aa</span>
              <span className="iso-label">Frontend & UI</span>
            </div>
            <div className="iso-layer layer-2">
              <span className="iso-badge">⚙</span>
              <span className="iso-label">Backend API</span>
            </div>
            <div className="iso-layer layer-1">
              <span className="iso-badge">🗄</span>
              <span className="iso-label">Database & Storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="explore-section" id="technologies">
        <div className="section-header">
          <h2>
            Explore the <span className="gradient-text">Technologies</span>
          </h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="main-layout">
          {/* Tech Cards Grid */}
          <div className="tech-grid">
            {TECH_DATA.map((tech) => {
              const isSelected = selectedTechs.some((t) => t.id === tech.id);
              return (
                <div key={tech.id} className={`tech-card ${isSelected ? 'selected' : ''}`}>
                  <div className="card-header">
                    <div className="tech-title-wrap">
                      <div className="tech-icon-box" style={{ color: tech.iconBg }}>
                        {tech.iconSvg}
                      </div>
                      <h3 className="tech-name">{tech.name}</h3>
                    </div>
                    <span className="badge" style={{ backgroundColor: tech.badgeColor }}>
                      {tech.badge}
                    </span>
                  </div>

                  <p className="tech-description">{tech.description}</p>

                  <div className="card-meta">
                    <span className="meta-tag">{tech.category}</span>
                    <span className="meta-tag">{tech.difficulty}</span>
                    <span className="rating">★ {tech.rating}</span>
                  </div>

                  <button
                    className={`btn-card-action ${isSelected ? 'in-stack' : ''}`}
                    onClick={() => toggleSelectTech(tech)}
                  >
                    {isSelected ? 'Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Your Stack Sidebar */}
          <aside className="stack-sidebar">
            <div className="sidebar-card">
              <h3>Your Stack</h3>
              <p className="sidebar-subtitle">
                {selectedTechs.length > 0
                  ? `${selectedTechs.length} technology selected`
                  : 'Your stack is empty.'}
              </p>

              {selectedTechs.length === 0 ? (
                <div className="empty-stack-box">
                  <p>Your stack is empty.</p>
                </div>
              ) : (
                <div className="selected-list">
                  {selectedTechs.map((item) => (
                    <div key={item.id} className="selected-item">
                      <div className="selected-item-info">
                        <span className="item-icon">{item.iconSvg}</span>
                        <span className="item-name">{item.name}</span>
                      </div>
                      <button
                        className="btn-remove"
                        onClick={() => removeTech(item.id)}
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button className="btn-remove-all" onClick={clearAll}>
                    Remove all
                  </button>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-brand">
              <div className="brand-icon">DS</div>
              <span className="brand-text">
                Dev<span className="brand-highlight">Stack</span>
              </span>
            </div>
            <p className="footer-desc">
              Curated tools, frameworks, and resources for developers building modern software.
            </p>
            <div className="social-links">
              <a href="#github">GitHub</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>PRODUCT</h4>
              <a href="#home">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="link-group">
              <h4>COMPANY</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#partners">Partners</a>
            </div>
            <div className="link-group">
              <h4>LEGAL</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}