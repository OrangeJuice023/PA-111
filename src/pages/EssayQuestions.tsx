import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllQuestions } from '@/data/questions'
import type { EssayQuestion } from '@/data/questions'
import './EssayQuestions.css'

function EssayQuestions() {
  const questions = getAllQuestions()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [divisionFilter, setDivisionFilter] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('')
  const [expanded, setExpanded] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id])
  }

  const filtered = questions.filter((q: EssayQuestion) => {
    const s = search.toLowerCase()
    const ms = q.title.toLowerCase().includes(s) || q.question.toLowerCase().includes(s)
    const md = divisionFilter ? q.divisionId === divisionFilter : true
    const mf = difficultyFilter ? q.difficulty === difficultyFilter : true
    return ms && md && mf
  })

  const copyText = (t: string) => { try { navigator.clipboard.writeText(t) } catch(e) {} }

  return (
    <div className="essay-questions">
      <div className="container">
        <header className="page-header">
          <h1>Possible Essay Exam Questions & Suggested Answers</h1>
          <p>Practice questions for preparation only.</p>
        </header>

        <div className="filters">
          <input type="text" placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)} />
          <select value={divisionFilter} onChange={e=>setDivisionFilter(e.target.value)}>
            <option value="">All</option>
            <option value="D1">D1</option><option value="D2A">D2A</option><option value="D2B">D2B</option><option value="D2C">D2C</option><option value="D2D">D2D</option><option value="D3">D3</option><option value="D4">D4</option>
          </select>
          <select value={difficultyFilter} onChange={e=>setDifficultyFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Foundational">Foundational</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Integrative">Integrative</option>
          </select>
          <button onClick={()=>setExpanded(filtered.map(q=>q.id))}>Expand All</button>
          <button onClick={()=>setExpanded([])}>Hide All</button>
        </div>

        {filtered.map((q) => (
          <article key={q.id} className="question-card">
            <div className="question-header">
              <h2>{q.title}</h2>
              <button onClick={()=>toggleExpanded(q.id)}>{expanded.includes(q.id)?'Hide':'Show'} Answer</button>
            </div>
            <div className="prompt">
              <p><strong>Prompt:</strong> {q.question}</p>
              <button onClick={()=>copyText(q.question)}>Copy Prompt</button>
              <button onClick={()=>navigate('/essay', {state:{question:q.question}})}>Practice</button>
            </div>
            {expanded.includes(q.id) && (
              <div className="answer-section">
                <h3>Suggested Answer</h3>
                <p>{q.answer}</p>
                {q.sources && q.sources.length>0 && <div className="sources">{q.sources.map((s:any,i:number)=><span key={i}>{s.key}{s.page?' '+s.page:''}</span>)}</div>}
                <button onClick={()=>copyText(q.answer)}>Copy Answer</button>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

export default EssayQuestions
