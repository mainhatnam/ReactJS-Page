export interface QuestionCardProps {
    title: string
    content: string
    votes: number
    answers: number
    views: number
    tags: string[]
    author: {
      name: string
      img_user: string
    }
    time: string
  }