import { useState } from 'react'
import { getAllQuestions } from '@/data/questions'
import type { EssayQuestion } from '@/data/questions'
import './EssayQuestions.css'

function EssayQuestions() {
  const questions = getAllQuestions()
  const [expanded, setExpanded] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const filtered = questions

  return (
    <div className="essay-questions">
      <div className="container">
        <header className="page-header">
          <h1>Possible Essay Exam Questions & Suggested Answers</h1>
          <p>Practice questions with complete suggested answers.</p>
        </header>
        {filtered.map((q: EssayQuestion) => (
          <article key={q.id} className="question-card">
            <div className="question-header">
              <h2>{q.title}</h2>
              <button className="toggle" onClick={() => toggleExpanded(q.id)}>
                {expanded.includes(q.id) ? '-' : '+'}
              </button>
            </div>
            {expanded.includes(q.id) && (
              <div className="answer-section">
                <h3>Suggested Answer</h3>
                <div className="answer-content">
                  <p>{q.answer}</p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

export default EssayQuestions
