"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AddPromptForm } from "@/components/add-prompt-form"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="font-semibold text-lg">PromptVault</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="#prompts" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Prompts
          </Link>
          <Link 
            href="#features" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AddPromptForm />
        </div>
      </div>
    </header>
  )
}
