import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { getAllQuestions } from '@/data/questions'
import type { EssayQuestion } from '@/data/questions'
import './EssayPractice.css'

export default function EssayPractice() {
  const location = useLocation()
  const questions = getAllQuestions()
  
  const [selectedId, setSelectedId] = useState('')
  const [currentPrompt, setCurrentPrompt] = useState('')
  const [activeQuestion, setActiveQuestion] = useState<EssayQuestion | null>(null)
  
  // Framework inputs
  const [claim, setClaim] = useState('')
  const [theory, setTheory] = useState('')
  const [application, setApplication] = useState('')
  const [comparison, setComparison] = useState('')
  const [evalText, setEvalText] = useState('')
  const [conclusion, setConclusion] = useState('')
  
  // Full Answer field
  const [answer, setAnswer] = useState('')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  // Load question passed via navigation state (e.g. from /essay-questions Practice button)
  useEffect(() => {
    const state = location.state as any
    if (state?.question) {
      setCurrentPrompt(state.question)
      const matched = questions.find((q) => q.question === state.question)
      if (matched) {
        setSelectedId(matched.id)
        setActiveQuestion(matched)
      }
    }
  }, [location.state, questions])

  // Restore saved draft from browser localStorage on initial mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pa111_essay_draft')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.answer || parsed.claim || parsed.prompt) {
          if (parsed.prompt && !currentPrompt) setCurrentPrompt(parsed.prompt)
          if (parsed.answer && !answer) setAnswer(parsed.answer)
          if (parsed.claim && !claim) setClaim(parsed.claim)
          if (parsed.theory && !theory) setTheory(parsed.theory)
          if (parsed.application && !application) setApplication(parsed.application)
          if (parsed.comparison && !comparison) setComparison(parsed.comparison)
          if (parsed.evalText && !evalText) setEvalText(parsed.evalText)
          if (parsed.conclusion && !conclusion) setConclusion(parsed.conclusion)
        }
      }
    } catch (e) {
      console.error('Error loading draft', e)
    }
  }, [])

  // Handle dropdown selection
  const handleSelectQuestion = (id: string) => {
    setSelectedId(id)
    const q = questions.find((item) => item.id === id)
    if (q) {
      setCurrentPrompt(q.question)
      setActiveQuestion(q)
    } else {
      setActiveQuestion(null)
    }
  }

  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0

  const showStatus = (msg: string) => {
    setStatusMessage(msg)
    setTimeout(() => setStatusMessage(null), 3000)
  }

  const saveDraft = () => {
    try {
      const payload = {
        prompt: currentPrompt,
        selectedId,
        answer,
        claim,
        theory,
        application,
        comparison,
        evalText,
        conclusion,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('pa111_essay_draft', JSON.stringify(payload))
      showStatus('✓ Draft successfully saved in this browser!')
    } catch (e) {
      showStatus('Failed to save draft.')
    }
  }

  const clearDraft = () => {
    if (window.confirm('Are you sure you want to clear your current draft and all framework fields?')) {
      setAnswer('')
      setClaim('')
      setTheory('')
      setApplication('')
      setComparison('')
      setEvalText('')
      setConclusion('')
      try {
        localStorage.removeItem('pa111_essay_draft')
      } catch (e) {}
      showStatus('Draft cleared.')
    }
  }

  const copyDraft = () => {
    if (!answer.trim()) {
      showStatus('Answer field is empty.')
      return
    }
    try {
      navigator.clipboard.writeText(answer)
      showStatus('✓ Answer copied to clipboard!')
    } catch (e) {
      showStatus('Clipboard copy failed.')
    }
  }

  // Auto-compile framework parts into answer textarea
  const compileFromFramework = () => {
    const parts = [
      claim ? `Thesis Claim:\n${claim}` : '',
      theory ? `Theoretical Framework:\n${theory}` : '',
      application ? `Situational Application:\n${application}` : '',
      comparison ? `Comparative Analysis:\n${comparison}` : '',
      evalText ? `Evaluation & Recommendations:\n${evalText}` : '',
      conclusion ? `Conclusion:\n${conclusion}` : ''
    ].filter(Boolean)

    if (parts.length === 0) {
      showStatus('Please fill in framework fields first.')
      return
    }

    const compiled = parts.join('\n\n')
    setAnswer((prev) => (prev ? `${prev}\n\n${compiled}` : compiled))
    showStatus('✓ Framework notes inserted into answer field!')
  }

  return (
    <div className="essay-practice-page">
      <div className="container">
        {/* Header */}
        <header className="page-header">
          <span className="badge">Active Workspace</span>
          <h1>Situational Essay Practice Workspace</h1>
          <p className="subtitle">
            Draft, structure, and refine exam-style situational essays using the disciplined 6-stage analytical framework. 
            All drafts are securely saved locally in your browser storage.
          </p>
        </header>

        {statusMessage && (
          <div className="status-toast" role="status">
            {statusMessage}
          </div>
        )}

        <div className="workspace-grid">
          {/* Main Writing Area */}
          <main className="editor-column">
            {/* Question Selector Card */}
            <div className="workspace-card">
              <div className="form-group">
                <label htmlFor="question-select" className="field-label">
                  Select a Question from the Bank:
                </label>
                <div className="select-row">
                  <select
                    id="question-select"
                    value={selectedId}
                    onChange={(e) => handleSelectQuestion(e.target.value)}
                    className="select-input"
                  >
                    <option value="">-- Choose an exam prompt from the bank --</option>
                    {questions.map((q) => (
                      <option key={q.id} value={q.id}>
                        {q.id.toUpperCase()}: {q.title} ({q.difficulty}){q.outOfScope ? ' · Possible not included in the exam' : ''}
                      </option>
                    ))}
                  </select>
                  <Link to="/essay-questions" className="btn-browse-bank">
                    Browse All &rarr;
                  </Link>
                </div>
              </div>

              {activeQuestion && (
                <div className="active-question-badges">
                  <span className="badge-division">{activeQuestion.divisionLabel}</span>
                  <span className={`badge-diff ${activeQuestion.difficulty.toLowerCase()}`}>
                    {activeQuestion.difficulty}
                  </span>
                  {activeQuestion.outOfScope && (
                    <span className="scope-badge">Possible not included in the exam</span>
                  )}
                  {activeQuestion.theories?.map((t, idx) => (
                    <span key={idx} className="badge-theory">{t}</span>
                  ))}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="prompt-field" className="field-label">
                  Exam Prompt:
                </label>
                <textarea
                  id="prompt-field"
                  rows={4}
                  value={currentPrompt}
                  onChange={(e) => setCurrentPrompt(e.target.value)}
                  placeholder="Select a question above or paste any custom exam prompt here..."
                  className="prompt-textarea"
                />
              </div>
            </div>

            {/* Writing Framework Accordion / Section */}
            <div className="workspace-card framework-card">
              <div className="framework-header">
                <h3>The 6-Stage Analytical Writing Framework</h3>
                <button onClick={compileFromFramework} className="btn-compile">
                  Compile Framework into Draft &darr;
                </button>
              </div>
              <p className="framework-hint">
                Structure your essay with clear conceptual milestones before composing continuous prose.
              </p>

              <div className="framework-fields">
                <div className="form-group">
                  <label className="framework-label">1. Central Thematic Claim (Thesis)</label>
                  <textarea
                    rows={2}
                    value={claim}
                    onChange={(e) => setClaim(e.target.value)}
                    placeholder="State a direct, unequivocal thesis answering the core prompt..."
                    className="framework-input"
                  />
                </div>

                <div className="form-group">
                  <label className="framework-label">2. Accurate Theoretical Exposition</label>
                  <textarea
                    rows={2}
                    value={theory}
                    onChange={(e) => setTheory(e.target.value)}
                    placeholder="Explicate the primary theories, concepts, and author assumptions..."
                    className="framework-input"
                  />
                </div>

                <div className="form-group">
                  <label className="framework-label">3. Concrete Situational Application</label>
                  <textarea
                    rows={3}
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    placeholder="Map the theoretical mechanics directly onto the factual issues of the case..."
                    className="framework-input"
                  />
                </div>

                <div className="form-group">
                  <label className="framework-label">4. Comparative Theoretical Juxtaposition</label>
                  <textarea
                    rows={2}
                    value={comparison}
                    onChange={(e) => setComparison(e.target.value)}
                    placeholder="Introduce a complementary or contrasting school (e.g., Classical vs. Human Relations)..."
                    className="framework-input"
                  />
                </div>

                <div className="form-group">
                  <label className="framework-label">5. Actionable Evaluation & Recommendations</label>
                  <textarea
                    rows={2}
                    value={evalText}
                    onChange={(e) => setEvalText(e.target.value)}
                    placeholder="Formulate realistic administrative remedies and evaluate trade-offs..."
                    className="framework-input"
                  />
                </div>

                <div className="form-group">
                  <label className="framework-label">6. Reasoned Policy Conclusion</label>
                  <textarea
                    rows={2}
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    placeholder="Synthesize a final judgment balancing operational efficiency with public values..."
                    className="framework-input"
                  />
                </div>
              </div>
            </div>

            {/* Final Answer Textarea */}
            <div className="workspace-card answer-card">
              <div className="answer-card-header">
                <label htmlFor="answer-field" className="field-label">
                  Your Full Written Essay Answer:
                </label>
                <div className="word-count-badge">
                  Word Count: <strong>{wordCount}</strong> words (Suggested: 250–450)
                </div>
              </div>

              <textarea
                id="answer-field"
                rows={14}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write your complete, connected analytical essay here. Incorporate your arguments, theoretical terms, case facts, and recommendations..."
                className="answer-textarea"
              />

              <div className="workspace-action-bar">
                <button onClick={copyDraft} className="btn btn-primary">
                  📋 Copy Essay Draft
                </button>
                <button onClick={saveDraft} className="btn btn-outline">
                  💾 Save Draft (Browser)
                </button>
                <button onClick={clearDraft} className="btn btn-danger">
                  🗑️ Clear Draft
                </button>
                <span className="storage-notice">
                  Drafts are stored locally in your browser localStorage.
                </span>
              </div>
            </div>
          </main>

          {/* Right Guidance Sidebar */}
          <aside className="guidance-sidebar">
            <div className="guidance-card">
              <h3>Exam Essay Rubric Criteria</h3>
              <ul className="guidance-list">
                <li>
                  <strong>Direct Thesis:</strong> Answer the exact prompt in the opening paragraph without evasive throat-clearing.
                </li>
                <li>
                  <strong>Scholarly Precision:</strong> Use formal terms (e.g., <em>differential piece-rate</em>, <em>goal displacement</em>, <em>trained incapacity</em>, <em>prepotency</em>, <em>hygiene vs. motivators</em>, <em>open systems equifinality</em>).
                </li>
                <li>
                  <strong>Double-Loop Diagnosis:</strong> Avoid superficial one-sided blame; distinguish structural defects from human-need frustration.
                </li>
                <li>
                  <strong>Public Value Focus:</strong> In public administration, remember that efficiency is never the sole criterion—equity, due process, and citizen responsiveness matter.
                </li>
              </ul>
            </div>

            <div className="guidance-card reviewer-prompt-card">
              <h3>Need Theoretical Background?</h3>
              <p>
                Review the comprehensive chapters, source citations, and comparison matrices in the canonical reviewer.
              </p>
              <Link to="/reviewer" className="btn btn-reviewer-side">
                Open Canonical Reviewer &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
