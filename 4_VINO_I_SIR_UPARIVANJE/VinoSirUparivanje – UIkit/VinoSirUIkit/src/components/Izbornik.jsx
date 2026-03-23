import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import UIkit from "uikit"

export default function Izbornik() {
  const navbarRef = useRef(null)
  const navigate = useNavigate()

  return (
    <nav ref={navbarRef} className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          {/* Početna */}
          <li className="uk-active">
            <a onClick={() => navigate("/")}>Početna</a>
          </li>

          {/* Vina Dropdown */}
          <li>
            <a href="#">🍷 Vina</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a onClick={() => navigate("/vina")}>Pregled vina</a>
                </li>
              </ul>
            </div>
          </li>

          {/* Sirevi Dropdown */}
          <li>
            <a href="#">🧀 Sirevi</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a onClick={() => navigate("/sirevi")}>Pregled sireva</a>
                </li>
              </ul>
            </div>
          </li>

          {/* Uparivanje */}
          <li>
            <a onClick={() => navigate("/uparivanje")}>🍷🧀 Uparivanje</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}