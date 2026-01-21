"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={cn("prose prose-sm dark:prose-invert max-w-none", className)}
      components={{
        h1: ({ children }) => (
          <h1 className="text-xl font-bold mb-4 text-foreground">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-lg font-semibold mt-6 mb-3 text-foreground">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base font-semibold mt-4 mb-2 text-foreground">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mb-3 text-muted-foreground leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-4 mb-3 space-y-1 text-muted-foreground">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-4 mb-3 space-y-1 text-muted-foreground">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        code: ({ className, children, ...props }) => {
          const isInline = !className
          return isInline ? (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
              {children}
            </code>
          ) : (
            <code
              className={cn(
                "block bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono",
                className
              )}
              {...props}
            >
              {children}
            </code>
          )
        },
        pre: ({ children }) => (
          <pre className="bg-muted rounded-lg overflow-x-auto mb-4">{children}</pre>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-accent pl-4 italic text-muted-foreground">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
