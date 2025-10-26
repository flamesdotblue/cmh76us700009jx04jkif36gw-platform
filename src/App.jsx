import HeroSection from './components/HeroSection';
import StudioAndApproach from './components/StudioAndApproach';
import ProjectsGallery from './components/ProjectsGallery';
import TestimonialsAndContact from './components/TestimonialsAndContact';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B] antialiased">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#FAF7F2]/70 bg-[#FAF7F2]/90 border-b border-neutral-300/40">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide text-[15px]">Atelier Lumen</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#studio" className="hover:opacity-70 transition-opacity">Studio</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
            <a href="#approach" className="hover:opacity-70 transition-opacity">Approach</a>
            <a href="#testimonials" className="hover:opacity-70 transition-opacity">Clients</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <HeroSection />
        <StudioAndApproach />
        <ProjectsGallery />
        <TestimonialsAndContact />
      </main>

      <footer className="border-t border-neutral-300/40 mt-24">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <span>© {new Date().getFullYear()} Atelier Lumen. All rights reserved.</span>
          <span className="opacity-70">Crafted with intention.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
