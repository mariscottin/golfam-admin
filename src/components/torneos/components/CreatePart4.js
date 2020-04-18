import React from 'react';

import './CreatePart4.css';
const CreatePart4 = props => {

    const handleInscriptionDateOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, inscriptionDate: event.target.value })
    };

    const handleInscriptionTimeOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, inscriptionTime: event.target.value })
    };

    return (
        <div>
            <div className="fecha-inscripciones__container">
                <div className="form-group">
                    <label htmlFor="fechaAperturaInscripciones">Abrir las inscripciones el día: </label>
                    <input
                        type="date"
                        className="form-control"
                        id="fechaAperturaInscripciones"
                        defaultValue={props.tournamentData.inscriptionDate}
                        onChange={handleInscriptionDateOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="horaAperturaInscripciones">A partir de las: </label>
                    <input
                        type="time"
                        className="form-control"
                        id="horaAperturaInscripciones"
                        defaultValue={props.tournamentData.inscriptionTime}
                        onChange={handleInscriptionTimeOnChange} />
                </div>
            </div>
            {(props.tournamentData.inscriptionDate && props.tournamentData.inscriptionTime) &&
                <div className="resumen-final__container jumbotron">
                    <h3>Resumen Final: {props.tournamentData.name}</h3>
                    <hr />
                    <p><span className="resumen-final__subtitle">Modalidad: </span> {props.tournamentData.type} - {props.tournamentData.subtype}</p>
                    <p><span className="resumen-final__subtitle">Jugadores por Linea: </span>{props.tournamentData.players}</p>
                    {props.tournamentData.division &&
                        <p><span className="resumen-final__subtitle">4 jugadores por línea a partir de las: </span>{props.tournamentData.divisionAt}</p>
                    }
                    <div className="resumen-final__categorias-container">
                        <h5>Categorias:</h5>
                        {props.tournamentData.categories.cab.selected &&
                            <div className="resumen-final__categorias">
                                <div className="resumen-final__subtitle">Caballeros: </div>
                                {props.tournamentData.categories.cab.cat.map((cat, i) => {
                                    return (
                                        <div key={i} className="resumen-final__categoria">{cat};</div>
                                    )
                                })}
                            </div>
                        }
                        {props.tournamentData.categories.dam.selected &&
                            <div className="resumen-final__categorias">
                                <div className="resumen-final__subtitle">Damas: </div>
                                {props.tournamentData.categories.dam.cat.map((cat, i) => {
                                    return (
                                        <div key={i} className="resumen-final__categoria">{cat};</div>
                                    )
                                })}
                            </div>
                        }
                        {props.tournamentData.categories.mix.selected &&
                            <div className="resumen-final__categorias">
                                <div className="resumen-final__subtitle">Mixto: </div>
                                {props.tournamentData.categories.mix.cat.map((cat, i) => {
                                    return (
                                        <div key={i} className="resumen-final__categoria">{cat};</div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                    <p><span className="resumen-final__subtitle">Cantidad de hoyos: </span>{props.tournamentData.holes}</p>
                    {props.tournamentData.holes === "18" &&
                        <p><span className="resumen-final__subtitle">Fecha: </span>{props.tournamentData.date.round1}</p>
                    }
                    {props.tournamentData.holes === "36" &&
                        <div>
                            <span className="resumen-final__subtitle">Fechas: </span>
                            <ul>
                                <li>Ronda 1: {props.tournamentData.date.round1}</li>
                                <li>Ronda 2: {props.tournamentData.date.round2}</li>
                            </ul>
                        </div>
                    }
                    {props.tournamentData.holes === "54" &&
                        <div>
                            <span className="resumen-final__subtitle">Fechas: </span>
                            <ul>
                                <li>Ronda 1: {props.tournamentData.date.round1}</li>
                                <li>Ronda 2: {props.tournamentData.date.round2}</li>
                                <li>Ronda 3: {props.tournamentData.date.round3}</li>
                            </ul>
                        </div>
                    }
                    {props.tournamentData.holes === "72" &&
                        <div>
                            <span className="resumen-final__subtitle">Fechas: </span>
                            <ul>
                                <li>Ronda 1: {props.tournamentData.date.round1}</li>
                                <li>Ronda 2: {props.tournamentData.date.round2}</li>
                                <li>Ronda 3: {props.tournamentData.date.round3}</li>
                                <li>Ronda 4: {props.tournamentData.date.round4}</li>
                            </ul>
                        </div>
                    }
                    <p><span className="resumen-final__subtitle">Estado: </span>
                        {props.tournamentData.status}<span> </span>
                    ({props.tournamentData.status === "Cerrado" && 'Solo Socios'}
                        {props.tournamentData.status === "Semi-Abierto" && 'Socios e Invitados'}
                        {props.tournamentData.status === "Abierto" && 'Socios, Invitados y No Socios'})
                </p>
                    {!props.tournamentData.simultaneas ?
                        <p><span className="resumen-final__subtitle">Salidas desde el hoyo: </span>{props.tournamentData.teeFromHole}</p>
                        :
                        <p><span className="resumen-final__subtitle">Salidas: </span>Simultáneas</p>
                    }
                    <div className="resumen-final__tee-times-container">
                        {props.tournamentData.teeFromHole === "1y10" &&
                            <h5>Hoyo 1:</h5>
                        }
                        <p>
                            <span className="resumen-final__subtitle">{!props.tournamentData.simultaneas && 'Primer'} Horario de Salida:  </span>
                            {props.tournamentData.firstTeetime}hs.
                        </p>

                        {!props.tournamentData.simultaneas &&
                            <p><span className="resumen-final__subtitle">Ultimo Horario de Salida: </span>{props.tournamentData.lastTeetime}hs.</p>
                        }
                        {!props.tournamentData.simultaneas &&
                            <p><span className="resumen-final__subtitle">Minutos entre Salidas: </span>{props.tournamentData.minutesBetween}</p>
                        }
                    </div>
                    {props.tournamentData.teeFromHole === "1y10" &&
                        <div className="resumen-final__tee-times-container">
                            <h5>Hoyo 10:</h5>
                            <p><span className="resumen-final__subtitle">Primer Horario de Salida: </span>{props.tournamentData.firstTeetime2}hs.</p>
                            <p><span className="resumen-final__subtitle">Ultimo Horario de Salida: </span>{props.tournamentData.lastTeetime2}hs.</p>
                            <p><span className="resumen-final__subtitle">Minutos entre Salidas: </span>{props.tournamentData.minutesBetween2}</p>
                        </div>
                    }
                    <div className="resumen-final__diferenciales-container">
                        <h5>Diferenciales</h5>
                        {(props.tournamentData.categories.cab.selected || props.tournamentData.categories.mix.selected) &&
                            <div>
                                <div className="resumen-final__subtitle">Caballeros: </div>
                                <ul>
                                    {props.tournamentData.diferenciales.cab.blue.selected &&
                                        <li>
                                            Azules ({props.tournamentData.diferenciales.cab.blue.hcpFrom} a {props.tournamentData.diferenciales.cab.blue.hcpTo})
                                    </li>
                                    }
                                    {props.tournamentData.diferenciales.cab.white.selected &&
                                        <li>
                                            Blancas ({props.tournamentData.diferenciales.cab.white.hcpFrom} a {props.tournamentData.diferenciales.cab.white.hcpTo})
                                    </li>
                                    }
                                    {props.tournamentData.diferenciales.cab.yellow.selected &&
                                        <li>
                                            Amarillas ({props.tournamentData.diferenciales.cab.yellow.hcpFrom} a {props.tournamentData.diferenciales.cab.yellow.hcpTo})
                                    </li>
                                    }
                                </ul>
                            </div>
                        }
                        {(props.tournamentData.categories.dam.selected || props.tournamentData.categories.mix.selected) &&
                            <div>
                                <div className="resumen-final__subtitle">Damas: </div>
                                <ul>
                                    {props.tournamentData.diferenciales.dam.red.selected &&
                                        <li>
                                            Rojas ({props.tournamentData.diferenciales.dam.red.hcpFrom} a {props.tournamentData.diferenciales.dam.red.hcpTo})
                                    </li>
                                    }
                                    {props.tournamentData.diferenciales.dam.yellow.selected &&
                                        <li>
                                            Amarillas ({props.tournamentData.diferenciales.dam.yellow.hcpFrom} a {props.tournamentData.diferenciales.dam.yellow.hcpTo})
                                    </li>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="resumen-final__green-fees-container">
                        {props.tournamentData.greenFee.socios && 
                            <p><span className="resumen-final__subtitle">Green Fee Socios: </span>${props.tournamentData.greenFee.socios}</p>
                        }
                        {props.tournamentData.greenFee.invitados && 
                            <p><span className="resumen-final__subtitle">Green Fee Invitados: </span>${props.tournamentData.greenFee.invitados}</p>
                        }
                        {props.tournamentData.greenFee.noSocios && 
                            <p><span className="resumen-final__subtitle">Green Fee No Socios: </span>${props.tournamentData.greenFee.noSocios}</p>
                        }
                    </div>
                    <p><span className="resumen-final__subtitle">Inscripciones: </span>El {props.tournamentData.inscriptionDate} a las {props.tournamentData.inscriptionTime}hs.</p>
                </div>
            }
        </div>
    )
}

export default CreatePart4;