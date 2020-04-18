import React from 'react';
import { Link } from 'react-router-dom';

import './NewTournament.css';

const NewTournament = () => {
    return(
        <div className="main-body">
            <h1 className="title">Creación de Torneos</h1>
            <div className="options__container">
                <Link to="/torneos/crear/nuevo" className="option">
                    Crear Nuevo Torneo
                </Link>
                <div className="option">
                    Duplicar Torneo Existente
                </div>
            </div>
        </div>
    )
}

export default NewTournament;