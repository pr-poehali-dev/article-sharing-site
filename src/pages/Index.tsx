import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticlesSection from "@/components/ArticlesSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ArticlesSection />
      <AboutSection />
    </div>
  );
};

export default Index;
