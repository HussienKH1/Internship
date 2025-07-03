import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Jobs from './pages/Jobs'
import ApplyPage from './pages/Apply'
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import ProjectsPage from './pages/Projects';
import Team from './pages/Team';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/apply/:jobId" element={<ApplyPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/team" element={<Team/>}/>
    </Routes>
  )
}

export default App
