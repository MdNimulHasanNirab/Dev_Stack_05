import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Load JSON Data from public folder
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading JSON:', err);
        setLoading(false);
      });
  }, []);

  // Add item to stack
  const handleAddToStack = (tech: Technology) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already added to your stack!`);
    } else {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to stack!`);
    }
  };

  // Remove single item from stack
  const handleRemoveItem = (id: string) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack.`);
    }
  };

  // Remove all items from stack
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('Cleared all items from your stack.');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-800 font-sans">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <div>
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
            
            {/* Left: Mobile Hamburger + Logo */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="md:hidden text-2xl text-slate-700 focus:outline-none"
              >
                ☰
              </button>
              
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-black text-sm shadow-md">
                  DS
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Dev<span className="text-brand-gradient">Stack</span>
                </span>
              </div>
            </div>

            {/* Center: Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
              <a href="#home" className="text-pink-600 hover:text-pink-700 transition">Home</a>
              <a href="#technologies" className="text-slate-600 hover:text-slate-900 transition">Technologies</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition">Projects</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
            </nav>

            {/* Right: Sign In / Sign Up */}
            <div className="flex items-center gap-4">
              <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition">
                Sign In
              </button>
              <button className="text-sm font-semibold px-5 py-2.5 rounded-full bg-brand-gradient text-white shadow-md hover:opacity-95 transition">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 px-6 py-4 space-y-3 bg-white text-sm font-medium">
              <a href="#home" className="block text-pink-600">Home</a>
              <a href="#technologies" className="block text-slate-600">Technologies</a>
              <a href="#projects" className="block text-slate-600">Projects</a>
              <a href="#about" className="block text-slate-600">About</a>
              <a href="#contact" className="block text-slate-600">Contact</a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="relative py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
                Build Your Ideal <br />
                <span className="text-brand-gradient">Development Stack</span>
              </h1>
              
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#technologies"
                  className="px-6 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-lg shadow-pink-500/20 hover:opacity-95 transition"
                >
                  Explore Technologies
                </a>
                <button className="px-6 py-3.5 rounded-xl border border-slate-300 font-bold text-sm text-slate-700 hover:bg-slate-50 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="flex justify-center md:justify-end">
              <img 
                src={heroImg} 
                alt="DevStack Hero Illustration" 
                className="w-full max-w-md h-auto object-contain drop-shadow-xl"
              />
            </div>

          </div>
        </section>

        {/* Main Section: Tech Grid & Sidebar */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Columns: Tech Catalog */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  Select Technologies
                </h2>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  Total {technologies.length} Tools
                </span>
              </div>

              {/* Loading State Spinner */}
              {loading ? (
                <div className="flex justify-center items-center py-20 text-slate-500 gap-3">
                  <div className="w-7 h-7 border-3 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading tech catalog...</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {technologies.map((tech) => {
                    const isAdded = selectedStack.some((item) => item.id === tech.id);
                    return (
                      <div 
                        key={tech.id} 
                        className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                              {tech.badge}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
                            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                              {tech.category}
                            </span>
                          </div>
                          
                          <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                            {tech.description}
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-medium text-slate-500 border-t border-slate-100 pt-3 mb-4">
                            <span>⭐ {tech.rating}</span>
                            <span>🎯 {tech.difficulty}</span>
                          </div>

                          <button
                            onClick={() => handleAddToStack(tech)}
                            disabled={isAdded}
                            className={`w-full py-2.5 rounded-xl font-bold text-xs transition ${
                              isAdded
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                : 'bg-brand-gradient text-white shadow-md hover:opacity-90'
                            }`}
                          >
                            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Column: Your Stack Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sticky top-24">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {selectedStack.length} Technology Selected
                    </p>
                  </div>
                  {selectedStack.length > 0 && (
                    <button 
                      onClick={handleRemoveAll}
                      className="text-xs font-semibold text-red-500 hover:underline"
                    >
                      Remove All
                    </button>
                  )}
                </div>

                {/* Empty State vs Selected Items */}
                {selectedStack.length === 0 ? (
                  <div className="text-center py-10 text-slate-400 space-y-2">
                    <span className="text-4xl block">🧱</span>
                    <p className="text-sm font-semibold text-slate-600">Your stack is empty</p>
                    <p className="text-xs">Add tools to build your ideal tech stack.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                    {selectedStack.map((item) => (
                      <div 
                        key={item.id} 
                        className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                          <div>
                            <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                            <span className="text-xs text-slate-400">{item.category}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-slate-400 hover:text-red-500 p-1 font-bold text-sm"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 md:px-8 mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xs">
                DS
              </div>
              <span className="text-lg font-bold text-white">DevStack</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Easily evaluate and manage technology stacks for modern web application projects.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">Technologies</a></li>
              <li><a href="#" className="hover:text-white">Stack Builder</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Connect</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} DevStack Builder. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App