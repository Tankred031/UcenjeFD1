import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Izbornik />
        <Routes>
          

        </Routes>
        <hr />
        &copy; Verzija 2
      </Container>
    </>
  )
}

export default App
