import { useState } from 'react'
import './App.css'


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
