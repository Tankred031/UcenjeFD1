import Izbornik from './components/Izbornik.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import VinaPregled from './pages/VinaPregled.jsx'
import SireviPregled from './pages/SireviPregled.jsx'
import Uparivanje from './pages/Uparivanje.jsx'

export default function App() {
  return (
    <div className="uk-container">
      <Izbornik />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vina" element={<VinaPregled />} />
        <Route path="/sirevi" element={<SireviPregled />} />
        <Route path="/uparivanje" element={<Uparivanje />} />
      </Routes>
      <hr />
      &copy; Verzija 2
    </div>
  )
}