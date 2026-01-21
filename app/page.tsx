import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PromptGrid } from "@/components/prompt-grid"
import { Footer } from "@/components/footer"
import { prompts, categories } from "@/data/prompts"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        <section id="prompts" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explorá los Prompts
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Navegá nuestra colección de prompts profesionales y encontrá el perfecto para tu próximo proyecto.
              </p>
            </div>
            
            <PromptGrid prompts={prompts} categories={categories} />
          </div>
        </section>
        
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  )
}
