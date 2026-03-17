
import './App.css'
import 'bulma/css/bulma.min.css';
import plavaSlika from '<public/plavac_mali'


function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Uparivanje Vina i Sira</h1>
        
        <div className="columns is-centered">
          <div className="column is-4">
            {/* Početak Bulma kartice */}
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="/plavac_mali" alt="Vino" />
                </figure>
              </div>
              
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Plavac Mali</p>
                    <p className="subtitle is-6">Crno vino</p>
                  </div>
                </div>

                <div className="content">
                  Odlično se slaže s tvrdim sirevima poput Paškog sira. 
                  Sadrži bogate arome tamnog voća.
                  <br />
                  
                </div>
              </div>

              <footer className="card-footer">
                <a href="#" className="card-footer-item">Detalji</a>
                <a href="#" className="card-footer-item">Kupi</a>
              </footer>
            </div>
            {/* Kraj kartice */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

     