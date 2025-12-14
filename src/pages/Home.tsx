import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 relative">
            <Navigation />
            <main className="relative">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
}

