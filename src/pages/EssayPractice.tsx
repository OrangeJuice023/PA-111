import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getAllQuestions } from '@/data/questions'
import './EssayPractice.css'

function EssayPractice() {
  const location = useLocation()
  const questions = getAllQuestions()
  const [selectedId, setSelectedId] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [claim, setClaim] = useState('')
  const [theory, setTheory] = useState('')
  const [application, setApplication] = useState('')
  const [comparison, setComparison] = useState('')
  const [evalText, setEvalText] = useState('')
  const [conclusion, setConclusion] = useState('')

  useEffect(() => {
    const state = location.state as any
    if (state?.question) {
      setQuestion(state.question)
    }
  }, [location.state])

  useEffect(() => {
    if (selectedId) {
      const q = questions.find(q => q.id === selectedId)
      if (q) setQuestion(q.question)
    }
  }, [selectedId, questions])

  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0

  const saveDraft = () => {
    try {
      localStorage.setItem('pa111_draft', JSON.stringify({question, answer, claim, theory, application, comparison, evalText, conclusion}))
      alert('Draft saved in this browser')
    } catch(e) {}
  }

  const clearDraft = () => {
    if (confirm('Clear draft?')) {
      setAnswer(''); setClaim(''); setTheory(''); setApplication(''); setComparison(''); setEvalText(''); setConclusion('')
      try { localStorage.removeItem('pa111_draft') } catch(e) {}
    }
  }

  return (
    <div className="essay-practice">
      <div className="container">
        <header className="page-header">
          <h1>Essay Practice Workspace</h1>
          <p>Draft answers using the framework below. Drafts are saved only in your browser if you choose to save them.</p>
        </header>

        <section className="workspace-section">
          <div className="card">
            <div className="form-group">
              <label>Select a question from the bank</label>
              <select value={selectedId} onChange={e=>setSelectedId(e.target.value)}>
                <option value="">-- Choose --</option>
                {questions.map(q=><option key={q.id} value={q.id}>{q.title}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Prompt</label>
              <textarea rows={3} value={question} onChange={e=>setQuestion(e.target.value)} />
            </div>

            <div className="framework">
              <h3>Writing Framework</h3>
              <div className="form-group"><label>Central Claim</label><textarea rows={2} value={claim} onChange={e=>setClaim(e.target.value)} /></div>
              <div className="form-group"><label>Theory Explanation</label><textarea rows={2} value={theory} onChange={e=>setTheory(e.target.value)} /></div>
              <div className="form-group"><label>Application to Scenario</label><textarea rows={3} value={application} onChange={e=>setApplication(e.target.value)} /></div>
              <div className="form-group"><label>Comparison/Integration</label><textarea rows={2} value={comparison} onChange={e=>setComparison(e.target.value)} /></div>
              <div className="form-group"><label>Evaluation & Recommendation</label><textarea rows={2} value={evalText} onChange={e=>setEvalText(e.target.value)} /></div>
              <div className="form-group"><label>Conclusion</label><textarea rows={2} value={conclusion} onChange={e=>setConclusion(e.target.value)} /></div>
            </div>

            <div className="form-group">
              <label>Your Answer</label>
              <textarea rows={10} value={answer} onChange={e=>setAnswer(e.target.value)} />
              <p>Word count: {wordCount}</p>
            </div>

            <div className="actions">
              <button className="btn btn-secondary" onClick={()=>{try{navigator.clipboard.writeText(answer)}catch(e){}}}>Copy Draft</button>
              <button className="btn btn-secondary" onClick={saveDraft}>Save Draft (browser)</button>
              <button className="btn btn-secondary" onClick={clearDraft}>Clear Draft</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EssayPractice
