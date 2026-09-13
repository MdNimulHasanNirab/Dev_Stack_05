import { useState } from "react";
import "./App.css";

type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    description: "A JavaScript library for building user interfaces.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Frontend",
    description: "A programming language for web development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    category: "Frontend",
    description: "JavaScript with static typing.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for backend development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 5,
    name: "MongoDB",
    category: "Database",
    description: "A NoSQL database for modern applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 6,
    name: "HTML",
    category: "Frontend",
    description: "The standard markup language for websites.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
];

function App() {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology | null>(null);

  const [myStack, setMyStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = myStack.some(
      (item) => item.id === technology.id
    );

    if (!alreadyAdded) {
      setMyStack([...myStack, technology]);
    }
  };

  const removeFromStack = (id: number) => {
    setMyStack(myStack.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <img
          className="logo"
          src="/assests/logo-text.png"
          alt="Dev Stack Logo"
        />

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#stack">My Stack</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Build Your Technology Stack</h1>

          <p>
            Explore different technologies and create your own development
            stack.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("technologies")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Technologies
          </button>
        </div>

        <div className="hero-image">
          <img
            src="/assests/banner-stack.png"
            alt="Technology Stack Banner"
          />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technology-section" id="technologies">
        <h2>Explore Technologies</h2>

        <div className="technology-grid">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className={`technology-card ${
                selectedTechnology?.id === technology.id
                  ? "selected-card"
                  : ""
              }`}
              onClick={() => setSelectedTechnology(technology)}
            >
              <img
                src={technology.image}
                alt={technology.name}
                className="technology-image"
              />

              <h3>{technology.name}</h3>

              <p>{technology.description}</p>

              <span>{technology.category}</span>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  addToStack(technology);
                }}
              >
                Add to Stack
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* My Stack Section */}
      <section className="stack-section" id="stack">
        <h2>My Stack</h2>

        {myStack.length === 0 ? (
          <p>No technology selected yet.</p>
        ) : (
          <div className="stack-list">
            {myStack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img src={technology.image} alt={technology.name} />

                <h3>{technology.name}</h3>

                <button onClick={() => removeFromStack(technology.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;