import 'uikit/dist/css/uikit.min.css'
import './App.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)
import Izbornik from './components/Izbornik'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VinaPregled from './pages/vina/VinaPregled'
import SireviPregled from './pages/sirevi/SireviPregled'
import Uparivanje from './pages/Uparivanje'


function App() {
  
  
  return (
    <>
      <div className='uk-container'>
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
    </>
  )
}

export default App
