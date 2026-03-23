import { useNavigate } from 'react-router-dom'

export default function Izbornik() {
  const navigate = useNavigate()

  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a onClick={() => navigate('/')}>Početna</a>
          </li>

          <li>
            <a href="#">🍷 Vina</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a onClick={() => navigate('/vina')}>Pregled vina</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="#">🧀 Sirevi</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a onClick={() => navigate('/sirevi')}>Pregled sireva</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a onClick={() => navigate('/uparivanje')}>🍷🧀 Uparivanje</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}