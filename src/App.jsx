import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, JobsPage, SingleJobPage} from './pages'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs-page" element={<JobsPage />} />
        <Route path="/jobs-page/:id" element={<SingleJobPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
