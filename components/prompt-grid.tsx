"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PromptCard } from "@/components/prompt-card"
import type { Prompt } from "@/lib/types"

interface PromptGridProps {
  prompts: Prompt[]
  categories: string[]
}

export function PromptGrid({ prompts, categories }: PromptGridProps) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesSearch =
        search === "" ||
        prompt.title.toLowerCase().includes(search.toLowerCase()) ||
        prompt.description.toLowerCase().includes(search.toLowerCase()) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))

      const matchesCategory =
        selectedCategory === null || prompt.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [prompts, search, selectedCategory])

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {filteredPrompts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No se encontraron prompts</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  )
}
