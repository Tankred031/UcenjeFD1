import 'bulma/css/bulma.min.css'
import './App.css'
import Home from './pages/Home'

function App() {


  return (
    <div className="container mt-5">
    <Izbornik />

    <section className="section">
      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />
        <Route path={RouteNames.VINA_PREGLED} element={<VinaPregled />} />
      </Routes>
    </section>

    <hr />

    <footer className="has-text-centered has-text-grey">
      &copy; Vins et Fromages
    </footer>
  </div>
  )
}

export default App
