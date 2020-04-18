import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faChevronLeft, 
    faChevronRight, 
    faCaretLeft, 
    faCaretDown, 
    faHome, 
    faGolfBall, 
    faUsers, 
    faUserTie, 
    faDollarSign, 
    faCog,
    faTachometerAlt,
    faCloudSun,
    faChartBar,
    faFlag,
    faPlusCircle,
    faEdit,
    faTrophy,
    faTable,
    faUserPlus

} from '@fortawesome/free-solid-svg-icons'


import './Sidebar.css';

const Sidebar = () => {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
    const [inicioIsOpen, setInicioIsOpen] = useState(false);
    const [torneosIsOpen, setTorneosIsOpen] = useState(false);
    const [jugadoresIsOpen, setJugadoresIsOpen] = useState(false);
    const [usuariosIsOpen, setUsuariosIsOpen] = useState(false);
    const [facturacionIsOpen, setFacturacionIsOpen] = useState(false);
    const [configuracionIsOpen, setConfiguracionIsOpen] = useState(false);

    const handleToggleSidebar = () => {
        sideBarIsOpen ? setSideBarIsOpen(false) : setSideBarIsOpen(true);
    }

    const handleInicioToggle = () => {
        inicioIsOpen ? setInicioIsOpen(false) : setInicioIsOpen(true);
    }

    const handleTorneosToggle = () => {
        torneosIsOpen ? setTorneosIsOpen(false) : setTorneosIsOpen(true);
    }

    const handleJugadoresToggle = () => {
        jugadoresIsOpen ? setJugadoresIsOpen(false) : setJugadoresIsOpen(true);
    }


    return (
        <nav className={`sidenav ${!sideBarIsOpen && 'closed'}`} >
            <div className="sidenav-toggler-container" >
                <FontAwesomeIcon icon={sideBarIsOpen ? faChevronLeft : faChevronRight} className="sidenav-toggler" onClick={handleToggleSidebar} />
            </div>

            {/* INICIO */}
            <div className="sidenav-full__container">
                <div className={`sidenav-item__container first-item ${inicioIsOpen && 'active'}`} onClick={handleInicioToggle}>
                    <div className={`justify-start ${!sideBarIsOpen && 'justify-closed'}`}>
                        <span className="sidenav-item__icon"><FontAwesomeIcon icon={faHome} title="Inicio" /></span>
                        <span className="sidenav-item__text">{sideBarIsOpen && "Inicio"}</span>
                    </div>
                    <span className="sidenav-item__arrow"><FontAwesomeIcon icon={!inicioIsOpen ? faCaretLeft : faCaretDown} /></span>
                </div>
                {inicioIsOpen &&
                    <div className="sidenav-list">
                        <ul>
                            <li>{sideBarIsOpen ? 'Dashboard' : <FontAwesomeIcon icon={faTachometerAlt} title="Dashboard"/>}</li>
                            <li>{sideBarIsOpen ? 'Clima' : <FontAwesomeIcon icon={faCloudSun} title="Clima"/>}</li>
                            <li>{sideBarIsOpen ? 'Estadísticas' : <FontAwesomeIcon icon={faChartBar} title="Estadísticas"/>}</li>
                            <li>{sideBarIsOpen ? 'Estado de la Cancha' : <FontAwesomeIcon icon={faFlag} title="Estado de la Cancha"/>}</li>
                        </ul>
                    </div>
                }
            </div>

            {/* TORNEOS */}
            <div className="sidenav-full__container">
                <div className={`sidenav-item__container ${torneosIsOpen && 'active'}`} onClick={handleTorneosToggle}>
                    <div className={`justify-start ${!sideBarIsOpen && 'justify-closed'}`}>
                        <span className="sidenav-item__icon"><FontAwesomeIcon icon={faGolfBall} title="Torneos" /></span>
                        <span className="sidenav-item__text">{sideBarIsOpen && "Torneos"}</span>
                    </div>
                    <span className="sidenav-item__arrow"><FontAwesomeIcon icon={!torneosIsOpen ? faCaretLeft : faCaretDown} /></span>
                </div>
                {torneosIsOpen &&
                    <div className="sidenav-list">
                        <ul>
                            <li><NavLink to="/torneos/crear">{sideBarIsOpen ? 'Crear Torneo' : <FontAwesomeIcon icon={faPlusCircle} title="Crear Torneo"/>}</NavLink></li>
                            <li>{sideBarIsOpen ? 'Administrar Torneo' : <FontAwesomeIcon icon={faEdit} title="Administrar Torneo"/>}</li>
                            <li>{sideBarIsOpen ? 'Resultados' : <FontAwesomeIcon icon={faTrophy} title="Resultados"/>}</li>
                            <li>{sideBarIsOpen ? 'Fixture' : <FontAwesomeIcon icon={faTable} title="Fixture"/>}</li>
                        </ul>
                    </div>
                }
            </div>
            
            {/* JUGADORES */}
            <div className="sidenav-full__container">
                <div className={`sidenav-item__container ${jugadoresIsOpen && 'active'}`} onClick={handleJugadoresToggle}>
                    <div className={`justify-start ${!sideBarIsOpen && 'justify-closed'}`}>
                        <span className="sidenav-item__icon"><FontAwesomeIcon icon={faUsers} title="Torneos" /></span>
                        <span className="sidenav-item__text">{sideBarIsOpen && "Jugadores"}</span>
                    </div>
                    <span className="sidenav-item__arrow"><FontAwesomeIcon icon={!jugadoresIsOpen ? faCaretLeft : faCaretDown} /></span>
                </div>
                {jugadoresIsOpen &&
                    <div className="sidenav-list">
                        <ul>
                            <li>{sideBarIsOpen ? 'Listado de Jugadores' : <FontAwesomeIcon icon={faPlusCircle} title="Listado de Jugadores"/>}</li>
                            <li>{sideBarIsOpen ? 'Crear Jugador' : <FontAwesomeIcon icon={faUserPlus} title="Crear Jugador"/>}</li>
                        </ul>
                    </div>
                }
            </div>
            <div className="sidenav-item__container">
                <div className={`justify-start ${!sideBarIsOpen && 'justify-closed'}`}>
                    <span className="sidenav-item__icon"><FontAwesomeIcon icon={faUserTie} title="Usuarios" /></span>
                    <span className="sidenav-item__text">{sideBarIsOpen && "Usuarios"}</span>
                </div>
                <span className="sidenav-item__arrow"><FontAwesomeIcon icon={faCaretLeft} /></span>
            </div>
            <div className="sidenav-item__container">
                <div className={`justify-start ${!sideBarIsOpen && 'justify-closed'}`}>
                    <span className="sidenav-item__icon"><FontAwesomeIcon icon={faDollarSign} title="Facturación" /></span>
                    <span className="sidenav-item__text">{sideBarIsOpen && "Facturación"}</span>
                </div>
                <span className="sidenav-item__arrow"><FontAwesomeIcon icon={faCaretLeft} /></span>
            </div>
            <div className="sidenav-item__container">
                <div className={`justify-start ${!sideBarIsOpen && 'justify-closed'}`}>
                    <span className="sidenav-item__icon"><FontAwesomeIcon icon={faCog} title="Configuración" /></span>
                    <span className="sidenav-item__text">{sideBarIsOpen && "Configuración"}</span>
                </div>
                <span className="sidenav-item__arrow"><FontAwesomeIcon icon={faCaretLeft} /></span>
            </div>

        </nav>
    )
}

export default Sidebar;