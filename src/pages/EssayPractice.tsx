import { useState } from 'react'
import './EssayPractice.css'

function EssayPractice() {
  const [question, setQuestion] = useState('')

  return (
    <div className="essay-practice">
      <div className="container">
        <header className="page-header">
          <h1>Essay Practice</h1>
          <p>Situational essay questions with CEACE framework.</p>
        </header>
        <section className="workspace-section">
          <div className="card">
            <div className="form-group">
              <label htmlFor="question">Essay Question</label>
              <textarea
                id="question"
                rows={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Paste your essay question here..."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EssayPractice
