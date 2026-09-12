import React, { useState } from 'react';
import './App.css';

// Local assets from your 'assests' folder
import logoText from '../assests/logo-text.png';
import bannerStack from '../assests/banner-stack.png';

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
    iconBg: '#61DAFB',
    iconSvg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
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
    iconBg: '#4FC08D',
    iconSvg: (
      <svg viewBox="0 0 261.76 226.69" width="20" height="20">
        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41B883"/>
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.351l78.52 136.01 78.52-136.01z" fill="#34495E"/>
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
    iconBg: '#FF3E00',
    iconSvg: (
      <svg viewBox="0 0 512 512" width="20" height="20" fill="#FF3E00">
        <path d="M447 167.3c-18.7-44.5-59.5-74.8-107.5-79.6-5.1-.5-10.2-.8-15.3-.8-44.7 0-86.8 20.8-114.1 56.4L135 240.2c-15.3 19.9-19.4 46.5-10.9 70.2 8.5 23.7 28.1 41.6 52.3 47.7 4.5 1.1 9.1 1.7 13.7 1.7 26.5 0 51.7-11.8 69.1-32.5l75.4-89.7c5-5.9 12.3-9.3 20.1-9.3h.2c7.8 0 15.1 3.5 20.1 9.4 9.1 10.8 7.7 26.9-3.1 36l-75.3 89.6c-34.9 41.5-86.5 65.3-140.2 65.3-9.3 0-18.7-.7-28-2.3-51.5-9.1-93.5-47.3-111.7-97.9s-10.7-106 19.8-145.8l75.2-89.6C246.6 30 331 8.8 411.7 40.5c48.8 19.2 86.8 58.7 104.2 108.3 17.4 49.7 10.7 104.2-18.4 148.2l-75.1 89.6c-4.9 5.8-12.2 9.2-19.9 9.3h-.3c-7.8 0-15.2-3.4-20.2-9.3-9.1-10.8-7.7-26.9 3.1-36l75.2-89.6c15.3-19.9 19.4-46.5 10.9-70.2-8.5-23.7-28.1-41.6-52.3-47.7-4.5-1.1-9.1-1.7-13.7-1.7-26.5 0-51.7 11.8-69.1 32.5l-75.4 89.7c-5 5.9-12.3 9.3-20.1 9.3h-.2c-7.8 0-15.1-3.5-20.1-9.4-9.1-10.8-7.7-26.9 3.1-36l75.3-89.6c34.9-41.5 86.5-65.3 140.2-65.3 9.3 0 18.7.7 28 2.3 51.5 9.1 93.5 47.3 111.7 97.9s10.7 106-19.8 145.8" />
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
      <svg viewBox="0 0 180 180" width="20" height="20">
        <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="#fff" />
        </mask>
        <g mask="url(#next-mask)">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path d="M149.508 157.52L69.142 54H54v71.97h12.38V71.018l69.742 90.495a89.704 89.704 0 0013.386-3.993z" fill="#fff" />
          <rect x="115" y="54" width="12" height="72" fill="#fff" />
        </g>
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
    iconBg: '#5FA04E',
    iconSvg: (
      <svg viewBox="0 0 256 277" width="20" height="20" fill="#5FA04E">
        <path d="M128 0L0 73.9v129.3L128 277l128-73.8V73.9L128 0zm97.7 188.7l-97.7 56.4-97.7-56.4V88.3l97.7-56.4 97.7 56.4v100.4z"/>
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
    iconBg: '#4169E1',
    iconSvg: (
      <svg viewBox="0 0 512 512" width="20" height="20" fill="#4169E1">
        <path d="M461.6 195.5c-4.6-26.6-22-49.3-46.7-60.8-21.3-9.9-46.4-11.8-69.5-6.7-18.1-23.7-46.8-38.3-77.4-38-51.5.5-94.8 39.8-99.2 91.2-19.1 2.3-37.3 10.3-51.4 23.3-21.7 20-30.8 50.1-24.1 79 5.8 25 22.8 45.4 46.1 55 12.7 5.2 26.5 7.6 40.4 7.2 12.8 19.3 33.3 32.5 56.4 36.3 32.1 5.3 64.9-5.1 87.2-27.8 15.6 4 32.1 3 47.1-2.9 23.9-9.4 41.9-29.3 47.4-54.2 5.5-24.8-1.5-50.7-18.4-69.8 5.6-10.4 8.7-21.9 8.8-33.8z" />
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
    iconBg: '#DC382D',
    iconSvg: (
      <svg viewBox="0 0 512 512" width="20" height="20" fill="#DC382D">
        <path d="M470.9 207.3L268.7 106.2c-7.9-4-17.5-4-25.4 0L41.1 207.3c-10 5-16.1 15.1-16.1 26.3v44.8c0 11.2 6.1 21.3 16.1 26.3l202.2 101.1c3.9 2 8.3 3 12.7 3s8.8-1 12.7-3l202.2-101.1c10-5 16.1-15.1 16.1-26.3v-44.8c0-11.2-6.1-21.3-16.1-26.3z" />
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
    iconBg: '#F7DF1E',
    iconSvg: (
      <svg viewBox="0 0 630 630" width="20" height="20">
        <rect width="630" height="630" fill="#f7df1e" />
        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.3 0-28.3 11-28.3 25.4 0 17.8 11 24.5 35.5 35.1l14.8 6.34c54.5 23.3 79.5 45.2 79.5 93 0 53.3-41.9 84.6-99.8 84.6-56.2 0-91.3-26.2-107.8-60.5zm-209.7 5.08c10.15 18.2 22.8 30.9 44.8 30.9 22.8 0 37.2-9.3 37.2-45.7v-195.4h60.5v196.7c0 70.2-41.5 101-98.1 101-49 0-80.3-24.5-95.6-58.4z" />
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
    iconBg: '#3178C6',
    iconSvg: (
      <svg viewBox="0 0 128 128" width="20" height="20">
        <rect width="128" height="128" fill="#3178c6" rx="16" />
        <path fill="#fff" d="M73.5 101.4c2.8 4.6 6.5 8 13 8 5.5 0 9-2.7 9-6.5 0-4.5-3.6-6.1-9.6-8.8l-3.3-1.4c-9.5-4-15.9-9.1-15.9-19.9 0-9.9 7.5-17.5 19.3-17.5 8.4 0 14.4 2.9 18.8 10.6l-10.3 6.6c-2.3-4.1-4.7-5.7-8.5-5.7-3.9 0-6.3 2.5-6.3 5.7 0 4 2.5 5.5 7.9 7.8l3.3 1.4c12.2 5.2 17.7 10.1 17.7 20.8 0 11.9-9.3 18.9-22.3 18.9-12.5 0-20.4-5.8-24.1-13.5l11.3-6.9zm-43.9 1.1V67.8h-15V57.1h43.3v10.7h-15v34.7H29.6z"/>
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
    iconBg: '#5382A1',
    iconSvg: (
      <svg viewBox="0 0 512 512" width="20" height="20" fill="#5382A1">
        <path d="M174.7 392.1c0 0-25.9 14.7 18.4 19.9 44.3 5.2 119.5 4.3 161.4-17.3 0 0-13.8 11.2-51.9 17.3-38.1 6.1-99.5 7.8-127.9-19.9zm-10.4-44.1c0 0-29.4 21.6 20.8 28.5 50.2 6.9 135.8 4.3 183.4-25.1 0 0-16.4 13.8-57.9 21.6-41.5 7.8-115.1 7.8-146.3-25zm203.3-70.9s19.9 21.6-21.6 38.9c-41.5 17.3-118.5 19-166.8 4.3-18.1-5.5-27.7-14.7-27.7-14.7s7.8 8.6 32.9 13.8c44.1 9.2 115.9 8.6 157.4-7.8 41.5-16.4 25.8-34.5 25.8-34.5z" />
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
    iconBg: '#38BDF8',
    iconSvg: (
      <svg viewBox="0 0 54 33" width="20" height="20" fill="#38BDF8">
        <path d="M13.5 0C6.075 0 1.35 3.75 0 11.25 2.7 7.5 5.738 6.075 9.113 6.975c1.925.513 3.3 1.913 4.825 3.463C16.425 12.963 19.338 16 27 16c7.425 0 12.15-3.75 13.5-11.25-2.7 3.75-5.738 5.175-9.113 4.275-1.925-.513-3.3-1.913-4.825-3.463C24.075 3.038 21.163 0 13.5 0zm-13.5 16c-7.425 0-12.15 3.75-13.5 11.25 2.7-3.75 5.738-5.175 9.113-4.275 1.925.513 3.3 1.913 4.825 3.463C3.425 28.963 6.338 32 14 32c7.425 0 12.15-3.75 13.5-11.25-2.7 3.75-5.738 5.175-9.113 4.275-1.925-.513-3.3-1.913-4.825-3.463C10.575 19.038 7.663 16 0 16z" transform="translate(13.5)"/>
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
    iconBg: '#2496ED',
    iconSvg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954 0h2.12a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.084.185.185.185m-2.954 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.166a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m0 3.12h2.119a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.186H2.166a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m2.954 0h2.119a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.084.185.185.185m2.955 0h2.119a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m2.954 0h2.12a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m2.954 0h2.119a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185M.016 14.34c.05.772.33 1.5.803 2.087C2.98 19.06 7.464 20 12.015 20c7.873 0 11.528-3.418 11.97-8.15.068-.724-.52-1.34-1.256-1.34h-4.398c-.463 0-.875.275-1.045.706-.607 1.543-2.316 2.478-4.103 2.478-1.745 0-3.26-.888-3.951-2.355-.187-.397-.582-.647-1.018-.647H.953c-.567 0-1.002.497-.937 1.059"/>
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
      {/* Header / Navbar */}
      <header className="navbar">
        <div className="nav-brand">
          <img src={logoText} alt="DevStack Logo" className="brand-logo-img" />
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
          <img src={bannerStack} alt="Development Stack Graphic" className="hero-banner-img" />
        </div>
      </section>

      {/* Main Grid & Selection Section */}
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
                      <div className="tech-icon-box">
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

          {/* Sidebar */}
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
                        <span style={{ display: 'flex' }}>{item.iconSvg}</span>
                        <span>{item.name}</span>
                      </div>
                      <button
                        className="btn-remove"
                        onClick={() => removeTech(item.id)}
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
            <img src={logoText} alt="DevStack Logo" className="brand-logo-img" />
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