"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Search, Copy, Database, Sparkles, Layers } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Busqueda Inteligente",
    description: "Encuentra el prompt perfecto filtrando por categoria, tags o palabras clave.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Copy,
    title: "Copia Rapida",
    description: "Un click para copiar cualquier prompt al portapapeles y usarlo al instante.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Markdown Nativo",
    description: "Visualiza los prompts con formato rico y estructurado directamente en la app.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Database,
    title: "Expandible",
    description: "Arquitectura preparada para integrar base de datos y agregar tus propios prompts.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "Dark Mode",
    description: "Cambiar entre modo claro y oscuro para trabajar comodo en cualquier ambiente.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    title: "Categorizado",
    description: "Prompts organizados por categoria para encontrar rapidamente lo que necesitas.",
    gradient: "from-pink-500 to-rose-500",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative p-6 rounded-2xl glass hover-glow transition-all duration-500 ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient border on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
      
      {/* Icon container */}
      <div className={`relative h-14 w-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <div className="h-full w-full rounded-xl bg-background flex items-center justify-center">
          <feature.icon className="h-6 w-6 text-foreground" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  )
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div ref={sectionRef} className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6 border border-cyan-500/30">
            <Zap className="h-4 w-4 text-cyan-500" />
            <span className="text-muted-foreground">Funcionalidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Todo lo que{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              necesitas
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Una herramienta simple pero poderosa para gestionar y acceder a tus prompts favoritos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
