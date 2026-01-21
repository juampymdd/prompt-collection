export interface Prompt {
  id: string
  title: string
  description: string
  content: string
  category: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface PromptFormData {
  title: string
  description: string
  content: string
  category: string
  tags: string[]
}
