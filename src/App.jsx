import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Mentionslegales from './components/Mentionslegales'
import './index.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions" element={<Mentionslegales />} />
        </Routes>
        <Footer />
        
    </div>
  )
}

export default App
