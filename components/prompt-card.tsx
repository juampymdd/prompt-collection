"use client"

import { useState } from "react"
import { Copy, Check, Eye, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import type { Prompt } from "@/lib/types"

interface PromptCardProps {
  prompt: Prompt
  index?: number
}

const categoryGradients: Record<string, string> = {
  "Desarrollo": "from-emerald-500 to-teal-500",
  "Documentación": "from-cyan-500 to-blue-500",
  "Diseño": "from-pink-500 to-rose-500",
  "default": "from-blue-500 to-indigo-500",
}

export function PromptCard({ prompt, index = 0 }: PromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const gradient = categoryGradients[prompt.category] || categoryGradients.default

  return (
    <>
      <div
        className="group relative h-full animate-fade-in-up opacity-0"
        style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
      >
        {/* Card glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500`} />
        
        {/* Main card */}
        <div className="relative h-full flex flex-col rounded-2xl glass p-6 transition-all duration-300 group-hover:-translate-y-1">
          {/* Category badge with gradient */}
          <div className="flex items-start justify-between gap-2 mb-4">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-xs font-medium`}>
              <Sparkles className="h-3 w-3" />
              {prompt.category}
            </div>
          </div>
          
          {/* Title with hover gradient */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
            {prompt.title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
            {prompt.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {prompt.tags.slice(0, 4).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs font-normal border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {prompt.tags.length > 4 && (
              <Badge variant="outline" className="text-xs font-normal border-white/20 bg-white/5">
                +{prompt.tags.length - 4}
              </Badge>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 glass border-white/20 hover:bg-white/10 transition-all bg-transparent"
              onClick={() => setIsOpen(true)}
            >
              <Eye className="h-4 w-4 mr-1.5" />
              Ver
            </Button>
            <Button 
              size="sm" 
              className={`flex-1 bg-gradient-to-r ${gradient} hover:opacity-90 text-white border-0 transition-all`}
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1.5" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1.5" />
                  Copiar
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto glass border-white/20">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-xs font-medium`}>
                <Sparkles className="h-3 w-3" />
                {prompt.category}
              </div>
            </div>
            <DialogTitle className="text-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              {prompt.title}
            </DialogTitle>
            <DialogDescription className="text-base">{prompt.description}</DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 border-t border-white/10 pt-4">
            <MarkdownRenderer content={prompt.content} />
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {prompt.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs border-white/20 bg-white/5">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button 
              onClick={copyToClipboard}
              className={`bg-gradient-to-r ${gradient} hover:opacity-90 text-white border-0`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1.5" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1.5" />
                  Copiar Prompt
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
