import { Header } from './components/common/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';
import { useAppStore } from './store/appStore';
import { useEffect } from 'react';

function App() {
    const { theme, toggleTheme } = useAppStore();

  // Применяем тему при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    localStorage.setItem('theme', initialTheme);
    
    if (initialTheme !== theme) {
      toggleTheme();
    }
  }, []);

  // Синхронизируем тему при изменении
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Home />
          <About />
          <Experience />
          <Contact />
        </main>
      </div>
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-foreground/60">
          <p>© {new Date().getFullYear()} Tigran Sargsyan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
