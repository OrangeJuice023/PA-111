import { useState, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getAllQuestions, SOURCE_LABELS } from '@/data/questions'
import type { EssayQuestion } from '@/data/questions'
import './EssayQuestions.css'

// Answers use light Markdown emphasis (**bold**, *italic*); render it instead of showing the asterisks.
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*)/g).map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={idx}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

function toPlainText(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*\n]+)\*/g, '$1')
}

export default function EssayQuestions() {
  const questions = getAllQuestions()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [divisionFilter, setDivisionFilter] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('')
  const [showOutOfScope, setShowOutOfScope] = useState(true)
  const [expanded, setExpanded] = useState<string[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])
  }

  const filtered = useMemo(() => {
    return questions.filter((q: EssayQuestion) => {
      const s = search.toLowerCase().trim()
      const matchesSearch = !s || 
        q.title.toLowerCase().includes(s) || 
        q.question.toLowerCase().includes(s) ||
        (q.theories && q.theories.some((t) => t.toLowerCase().includes(s)))
      const matchesDivision = divisionFilter ? q.divisionId === divisionFilter : true
      const matchesDifficulty = difficultyFilter ? q.difficulty === difficultyFilter : true
      const matchesScope = showOutOfScope || !q.outOfScope
      return matchesSearch && matchesDivision && matchesDifficulty && matchesScope
    })
  }, [questions, search, divisionFilter, difficultyFilter, showOutOfScope])

  const copyText = (text: string, id: string) => {
    try {
      navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (e) {
      console.error(e)
    }
  }

  const resetFilters = () => {
    setSearch('')
    setDivisionFilter('')
    setDifficultyFilter('')
    setShowOutOfScope(true)
  }

  const outOfScopeCount = questions.filter((q) => q.outOfScope).length

  return (
    <div className="essay-questions-page">
      <div className="container">
        {/* Page Header */}
        <header className="page-header">
          <span className="badge">PA 111 Question Bank</span>
          <h1>Possible Essay Exam Questions & Model Suggested Answers</h1>
          <p className="subtitle">
            Situational and integrative essay prompts for PA 111. Each prompt includes a complete suggested answer
            (a thesis, the relevant theory, comparisons, an application and limits) with references to the course materials it draws on.
          </p>
          <p className="scope-summary">
            <strong>Exam scope:</strong> the confirmed cutoff is Peter F. Drucker&apos;s Management by Objectives.{' '}
            {questions.length - outOfScopeCount} of {questions.length} questions fall within that scope; {outOfScopeCount} rely
            on later topics and are marked <span className="scope-badge">Possible not included in the exam</span>
          </p>
          <div className="exam-disclaimer">
            <strong>Academic Notice:</strong> These questions and model answers are designed as comprehensive study and practice instruments. 
            They do not constitute actual leaks or confirmed predictions of the professor's upcoming examination.
          </div>
        </header>

        {/* Filter and Search Bar */}
        <section className="filter-panel" aria-label="Question filters">
          <div className="filter-row">
            <div className="search-box">
              <label htmlFor="search-input" className="sr-only">Search</label>
              <input
                id="search-input"
                type="text"
                placeholder="Search prompts, theories, or authors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
              {search && (
                <button onClick={() => setSearch('')} className="clear-search-btn" title="Clear search">
                  ✕
                </button>
              )}
            </div>

            <div className="select-group">
              <select 
                value={divisionFilter} 
                onChange={(e) => setDivisionFilter(e.target.value)}
                className="filter-select"
                aria-label="Filter by syllabus division"
              >
                <option value="">All Syllabus Divisions</option>
                <option value="D1">Division I: History of Administration</option>
                <option value="D2A">Division II-A: Classical School</option>
                <option value="D2B">Division II-B: Human Relations School</option>
                <option value="D2C">Division II-C: Modern Management</option>
                <option value="D2D">Division II-D: Emerging Perspectives</option>
                <option value="D3">Division III: Metaphors of Organization</option>
                <option value="D4">Division IV: Functions of Administration</option>
              </select>

              <select 
                value={difficultyFilter} 
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="filter-select"
                aria-label="Filter by question difficulty"
              >
                <option value="">All Difficulty Levels</option>
                <option value="Foundational">Foundational</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Integrative">Integrative</option>
              </select>
            </div>

            <div className="bulk-actions">
              <button 
                onClick={() => setExpanded(filtered.map((q) => q.id))}
                className="btn-action"
                title="Expand all filtered answers"
              >
                Expand All
              </button>
              <button 
                onClick={() => setExpanded([])}
                className="btn-action"
                title="Collapse all answers"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="filter-status">
            <span>Showing <strong>{filtered.length}</strong> of {questions.length} questions</span>
            {(search || divisionFilter || difficultyFilter || !showOutOfScope) && (
              <button onClick={resetFilters} className="reset-filter-link">
                Reset filters
              </button>
            )}
          </div>

          <label className="scope-toggle">
            <input
              type="checkbox"
              checked={showOutOfScope}
              onChange={(e) => setShowOutOfScope(e.target.checked)}
            />
            Show questions that fall after the Drucker (MBO) exam cutoff
          </label>
        </section>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="empty-state-card">
            <h3>No matching essay questions found</h3>
            <p>Try adjusting your search keywords, clearing the division/difficulty filters, or showing questions beyond the exam cutoff.</p>
            <button onClick={resetFilters} className="btn btn-primary">
              Clear All Filters
            </button>
          </div>
        )}

        {/* Question Cards List */}
        <div className="questions-list">
          {filtered.map((q) => {
            const isExpanded = expanded.includes(q.id)
            return (
              <article key={q.id} className="question-card">
                {/* Header */}
                <div className="question-card-header">
                  <div className="meta-pill-group">
                    <span className="division-pill">{q.divisionLabel || q.divisionId}</span>
                    <span className={`difficulty-pill ${q.difficulty.toLowerCase()}`}>
                      {q.difficulty}
                    </span>
                    {q.outOfScope && (
                      <span className="scope-badge">Possible not included in the exam</span>
                    )}
                  </div>
                  <h2 className="question-title">{q.title}</h2>
                  {q.theories && q.theories.length > 0 && (
                    <div className="theories-tag-group">
                      <span className="theories-label">Core Theories:</span>
                      {q.theories.map((t, idx) => (
                        <span key={idx} className="theory-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Prompt (Always Visible) */}
                <div className="prompt-container">
                  <div className="prompt-label">Exam Prompt:</div>
                  <p className="prompt-text">{q.question}</p>
                  
                  <div className="prompt-action-bar">
                    <button 
                      onClick={() => copyText(q.question, `prompt-${q.id}`)}
                      className="btn-prompt-action"
                    >
                      {copiedId === `prompt-${q.id}` ? '✓ Copied Prompt!' : '📋 Copy Prompt'}
                    </button>
                    <button 
                      onClick={() => navigate('/essay', { state: { question: q.question } })}
                      className="btn-prompt-action practice-btn"
                    >
                      ✍️ Practice in Workspace
                    </button>
                    <button 
                      onClick={() => toggleExpanded(q.id)}
                      className="btn-toggle-answer"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? '▲ Hide Model Answer' : '▼ View Model Answer'}
                    </button>
                  </div>
                </div>

                {/* Suggested Answer (Collapsible) */}
                {isExpanded && (
                  <div className="model-answer-section">
                    <div className="answer-header">
                      <h3>Model Analytical Answer</h3>
                      <button 
                        onClick={() => copyText(toPlainText(q.answer), `answer-${q.id}`)}
                        className="btn-copy-answer"
                      >
                        {copiedId === `answer-${q.id}` ? '✓ Copied Answer!' : '📋 Copy Complete Answer'}
                      </button>
                    </div>

                    <div className="answer-body">
                      {q.answer.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx}>{renderInline(paragraph)}</p>
                      ))}
                    </div>

                    {q.sources && q.sources.length > 0 && (
                      <div className="sources-footer">
                        <span className="sources-label">Source References:</span>
                        <div className="sources-tags">
                          {q.sources.map((s, sIdx) => (
                            <span key={sIdx} className="source-citation">
                              <strong>{SOURCE_LABELS[s.key]}</strong> {s.page ? `• ${s.page}` : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bottom-practice-banner">
          <h3>Ready to test your analytical essay writing skills?</h3>
          <p>Transfer any prompt directly into the interactive workspace and write your draft using the 6-stage framework.</p>
          <Link to="/essay" className="btn btn-primary">
            Open Essay Practice Workspace &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
