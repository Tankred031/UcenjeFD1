import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IME_APLIKACIJE, RouteNames } from "../constants";

export default function Izbornik() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    return (
        <nav className="navbar is-light" role="navigation">
            <div className="navbar-brand">
                <a
                    className="navbar-item"
                    onClick={() => navigate(RouteNames.HOME)}
                >
                    {IME_APLIKACIJE}
                </a>

                <a
                    role="button"
                    className={`navbar-burger ${isActive ? "is-active" : ""}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <a
                        className="navbar-item"
                        onClick={() => navigate(RouteNames.HOME)}
                    >
                        Početna
                    </a>

                    <div
                        className={`navbar-item has-dropdown ${dropdownActive ? "is-active" : ""
                            }`}
                        onClick={() => setDropdownActive(!dropdownActive)}
                    >
                        <a className="navbar-link">Programi</a>

                        <div className="navbar-dropdown">
                            <a
                                className="navbar-item"
                                onClick={() => navigate(RouteNames.SMJEROVI)}
                            >
                                Smjerovi
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}