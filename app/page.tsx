import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import HeroSection from "./components/sections/hero-section"
import AboutSection from "./components/sections/about-section"
import HowItWorksSection from "./components/sections/how-it-works-section"
import ForWhoSection from "./components/sections/for-who-section"
import FeaturesSection from "./components/sections/features-section"
import CTASection from "./components/sections/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ForWhoSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}