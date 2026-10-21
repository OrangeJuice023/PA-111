import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Syllabus from './pages/Syllabus'
import TopicPage from './pages/TopicPage'
import ConceptConnections from './pages/ConceptConnections'
import EssayPractice from './pages/EssayPractice'
import EssayQuestions from './pages/EssayQuestions'
import Reviewer from './pages/Reviewer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="syllabus" element={<Syllabus />} />
        <Route path="reviewer" element={<Reviewer />} />
        <Route path="topics/:topicId" element={<TopicPage />} />
        <Route path="connections" element={<ConceptConnections />} />
        <Route path="essay" element={<EssayPractice />} />
        <Route path="essay-questions" element={<EssayQuestions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
