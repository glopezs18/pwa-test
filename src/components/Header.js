import React, { useEffect } from 'react'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import '../styles/header.scss';

function Header() {
    const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt",
            (event) => {
                event.preventDefault();
                console.log("correct", "beforeinstallprompt", event);

                window.deferredPrompt = event;

                setIsReadyForInstall(true);
            });
    }, []);

    async function downloadApp() {
        console.log("correct", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;

        if (!promptEvent) {
            console.log("oops, no prompt event saved in window");
            return;
        }

        promptEvent.prompt();

        const result = await promptEvent.userChoice;
        console.log("correct", "userChoice, result");

        window.deferredPrompt = null;

        setIsReadyForInstall(false);
    }
    return (
        <div>
            <header className="p-3 bg-header text-white">
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <span className="fs-4 text-white">Hoja de Trabajo #9</span>
                        </a>

                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={`nav-link px-2 text-white ${({ isActive }) => (isActive ? 'active' : '')}`}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/list"
                                    className={`nav-link px-2 text-white ${({ isActive }) => (isActive ? 'active' : '')}`}
                                >
                                    Listado
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={`nav-link px-2 text-white ${({ isActive }) => (isActive ? 'active' : '')}`}
                                >
                                    Acerca de
                                </NavLink>
                            </li>
                            <li>
                                {isReadyForInstall && <button className="btn btn-danger" onClick={downloadApp}>Descargar App</button>}
                            </li>
                        </ul>
                    </header>
                </div>
            </header>
        </div>
    );

}

export default Header