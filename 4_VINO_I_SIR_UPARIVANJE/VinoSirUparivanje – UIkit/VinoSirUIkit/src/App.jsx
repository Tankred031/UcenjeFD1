import 'uikit/dist/css/uikit.min.css'
import './App.css'
//import { Container } from 'react-bootstrap'
import Izbornik from './components/Izbornik'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Home from './pages/Home'


function App() {
  
  
  return (
    <>
      <Container>
        <Izbornik />
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
          <Route path={RouteNames.VINA_PREGLED} element={<VinaPregled />} />
          <Route path={RouteNames.SIREVI_PREGLED} element={<SireviPregled />} />
          <Route path={RouteNames.UPARIVANJE} element={<Uparivanje />} />
        </Routes>
        <hr />
        &copy; Verzija 2
      </Container>
    </>
  )
}

export default App
