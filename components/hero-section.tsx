"use client"

import { ArrowRight, Sparkles, Terminal, Code2, Braces } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-blue-500/20 animate-gradient" />
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-800" />
      
      {/* Floating icons */}
      <div className="absolute top-32 right-[15%] animate-float opacity-20">
        <Terminal className="w-16 h-16 text-emerald-500" />
      </div>
      <div className="absolute bottom-32 left-[15%] animate-float-delayed opacity-20">
        <Code2 className="w-20 h-20 text-cyan-500" />
      </div>
      <div className="absolute top-1/3 left-[10%] animate-float opacity-15">
        <Braces className="w-14 h-14 text-blue-500" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 border border-emerald-500/30">
            <Sparkles className="h-4 w-4 text-emerald-500" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium">
              Tu libreria de prompts profesionales
            </span>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "150ms", animationFillMode: "forwards" }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="block text-foreground">Potencia tu</span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              productividad
            </span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            Coleccion curada de prompts para desarrollo, diseno, documentacion y mas. 
            <span className="block mt-2 text-foreground/80">Copia, usa y transforma tu flujo de trabajo.</span>
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "450ms", animationFillMode: "forwards" }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <a href="#prompts">
                <span className="relative z-10 flex items-center">
                  Explorar Prompts
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg glass border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 bg-transparent"
              asChild
            >
              <a href="#features">
                Conocer mas
              </a>
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="animate-fade-in-up opacity-0 mt-20" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: "50+", label: "Prompts" },
              { value: "10", label: "Categorias" },
              { value: "100%", label: "Gratuito" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
