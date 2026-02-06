import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { useAppStore } from "./store/appStore";
import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

function AppContent() {
  const { theme, toggleTheme } = useAppStore();
  const { t } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    localStorage.setItem("theme", initialTheme);

    if (initialTheme !== theme) {
      toggleTheme();
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-custom text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-foreground/60">
          <p>
            © {new Date().getFullYear()} Tigran Sargsyan.{" "}
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
