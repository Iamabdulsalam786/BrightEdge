import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Hero Section Placeholder */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            We Transform Brands
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Into Digital Powerhouses
          </p>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      <section id="portfolio" className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Portfolio Section</h2>
          <p className="text-slate-600">Coming soon...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact Section</h2>
          <p className="text-slate-600">Coming soon...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
