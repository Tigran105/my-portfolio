import { Header } from './components/common/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Tigran Sargsyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
