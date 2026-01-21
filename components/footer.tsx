import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="font-semibold">PromptVault</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Construido con Next.js, TypeScript y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
