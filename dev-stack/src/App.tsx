import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTechnology, setSelectedTechnology] =
    useState<string | null>(null);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  function addToStack(technology: Technology) {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");
      return;
    }

    setStack([...stack, technology]);
    setSelectedTechnology(technology.id);

    toast.success(`${technology.name} added to your stack!`);
  }

  function removeFromStack(id: string) {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    if (selectedTechnology === id) {
      setSelectedTechnology(null);
    }

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack`
      );
    }
  }

  function removeAll() {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty");
      return;
    }

    setStack([]);
    setSelectedTechnology(null);

    toast.info("All technologies removed");
  }

  function selectTechnology(id: string) {
    setSelectedTechnology(id);
  }

  return (
    <div className="app">
      <ToastContainer position="top-right" />

      {/* Navbar */}
      <header className="navbar">
        <a href="#home" className="brand">
          <img
            src="/assests/logo-text.png"
            alt="Dev Stack Logo"
            className="brand-logo"
          />
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="hero-label">BUILD YOUR DREAM STACK</p>

            <h1 className="hero-title">
              Your journey to
              <br />
              <span className="gradient-text">
                better development.
              </span>
            </h1>

            <p className="hero-subtitle">
              Discover powerful technologies and build your perfect
              development stack. Explore, learn, and create something
              amazing.
            </p>

            <div className="hero-buttons">
              <a href="#technologies" className="btn-accent">
                Explore Technologies
              </a>

              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>

          <div className="hero-illustration">
            <img
              src="/assests/banner-stack.png"
              alt="Development stack illustration"
              className="hero-banner-img"
            />
          </div>
        </section>

        {/* Technologies Section */}
        <section className="explore-section" id="technologies">
          <div className="section-header">
            <div>
              <h2>Explore Technologies</h2>

              <p>
                Choose the tools that power your development journey.
              </p>
            </div>
          </div>

          <div className="main-layout">
            <div className="technology-area">
              {loading ? (
                <div className="loading">
                  <p>Loading technologies...</p>
                </div>
              ) : (
                <div className="tech-grid">
                  {technologies.map((technology) => {
                    const isAdded = stack.some(
                      (item) => item.id === technology.id
                    );

                    const isSelected =
                      selectedTechnology === technology.id;

                    return (
                      <div
                        key={technology.id}
                        className={
                          isSelected
                            ? "tech-card selected-card"
                            : "tech-card"
                        }
                        onClick={() =>
                          selectTechnology(technology.id)
                        }
                      >
                        <div className="card-header">
                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="tech-icon"
                          />

                          <span className="badge">
                            {technology.badge}
                          </span>
                        </div>

                        <h3>{technology.name}</h3>

                        <p className="tech-description">
                          {technology.description}
                        </p>

                        <div className="card-meta">
                          <span className="meta-tag">
                            {technology.category}
                          </span>

                          <span className="meta-tag">
                            {technology.difficulty}
                          </span>

                          <span className="rating">
                            ★ {technology.rating}
                          </span>
                        </div>

                        <button
                          className={
                            isAdded
                              ? "btn-card-action in-stack"
                              : "btn-card-action"
                          }
                          disabled={isAdded}
                          onClick={(event) => {
                            event.stopPropagation();
                            addToStack(technology);
                          }}
                        >
                          {isAdded
                            ? "✓ Added to Stack"
                            : "Add to Stack"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="sidebar-card">
              <div className="sidebar-header">
                <div>
                  <h3>Your Stack</h3>

                  <p className="sidebar-subtitle">
                    {stack.length} Technology
                    {stack.length !== 1 ? "ies" : "y"} Selected
                  </p>
                </div>

                <span className="stack-count">{stack.length}</span>
              </div>

              {stack.length === 0 ? (
                <div className="empty-stack-box">
                  <p>Your stack is empty.</p>

                  <small>
                    Add technologies to start building your stack.
                  </small>
                </div>
              ) : (
                <>
                  <div className="selected-list">
                    {stack.map((technology) => (
                      <div
                        className="selected-item"
                        key={technology.id}
                      >
                        <div className="selected-item-info">
                          <img
                            src={technology.icon}
                            alt={technology.name}
                          />

                          <div>
                            <strong>{technology.name}</strong>
                            <small>{technology.category}</small>
                          </div>
                        </div>

                        <button
                          className="btn-remove"
                          onClick={() =>
                            removeFromStack(technology.id)
                          }
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn-remove-all"
                    onClick={removeAll}
                  >
                    Remove All
                  </button>
                </>
              )}
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-top">
          {/* Footer Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-brand-link">
              <img
                src="/assests/logo-text.png"
                alt="Dev Stack Logo"
                className="footer-logo"
              />
            </a>

            <p className="footer-desc">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="social-links">
              <a href="https://github.com">GitHub</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-links">
            <div className="link-group">
              <h4>PRODUCT</h4>

              <a href="#home">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
            </div>

            {/* Company Links */}
            <div className="link-group">
              <h4>COMPANY</h4>

              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#careers">Careers</a>
            </div>

            {/* Legal Links */}
            <div className="link-group">
              <h4>LEGAL</h4>

              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;