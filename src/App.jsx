import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, Listings} from './pages'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
