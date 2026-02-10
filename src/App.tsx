import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useAppStore } from "@/shared/store/appStore.ts";
import {
  LanguageProvider,
  useLanguage,
} from "@/shared/contexts/LanguageContext.tsx";
import { Header } from "@/shared/components/common/Header/Header.tsx";
import { Home } from "@/features/home/page.tsx";
import { About } from "@/features/about/page.tsx";
import { Experience } from "@/features/experience/page.tsx";
import { Contact } from "@/features/contact/page.tsx";

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

      <Toaster position="top-center" reverseOrder={false} />
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
