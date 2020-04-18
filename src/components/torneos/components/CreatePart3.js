import React from 'react';

import './CreatePart3.css';
const CreatePart3 = props => {

    const checkIfSalidasPorHoyoIsChecked = (hole) => {
        if (props.tournamentData.teeFromHole === hole) {
            return true;
        } else {
            return false;
        }
    }

    const handleTeeFromHoleOnChange = (event) => {
        props.setTournamentData({ ...props.tournamentData, teeFromHole: event.target.value })
    }

    const handleFirstTeetimeOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, firstTeetime: event.target.value });
    }

    const handleMinutesBetweenOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, minutesBetween: event.target.value });
    }

    const handleLastTeetimeOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, lastTeetime: event.target.value });
    }

    const handleSimultaneasOnChange = () => {
        !props.tournamentData.simultaneas
            ? props.setTournamentData({ ...props.tournamentData, simultaneas: true })
            : props.setTournamentData({ ...props.tournamentData, simultaneas: false });
    }

    const handleFirstTeetime2OnChange = event => {
        props.setTournamentData({ ...props.tournamentData, firstTeetime2: event.target.value });
    }

    const handleMinutesBetween2OnChange = event => {
        props.setTournamentData({ ...props.tournamentData, minutesBetween2: event.target.value });
    }

    const handleLastTeetime2OnChange = event => {
        props.setTournamentData({ ...props.tournamentData, lastTeetime2: event.target.value });
    }

    const handleDiferencialRojasDamasOnChange = () => {
        !props.tournamentData.diferenciales.dam.red.selected ?
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    dam: {
                        ...props.tournamentData.diferenciales.dam,
                        red: {
                            ...props.tournamentData.diferenciales.dam.red, 
                                selected: true
                        }
                    }
                }
            })
            :
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    dam: {
                        ...props.tournamentData.diferenciales.dam,
                        red: {
                            ...props.tournamentData.diferenciales.dam.red, 
                                selected: false,
                                hcpFrom: null,
                                hcpTo: null
                        }
                    }
                }
            })
    }

    const handleDiferencialRojasDamasHcpFromOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                dam: {
                    ...props.tournamentData.diferenciales.dam,
                    red: {
                        ...props.tournamentData.diferenciales.dam.red, 
                            hcpFrom: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialRojasDamasHcpToOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                dam: {
                    ...props.tournamentData.diferenciales.dam,
                    red: {
                        ...props.tournamentData.diferenciales.dam.red, 
                            hcpTo: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialAmarillasDamasOnChange = () => {
        !props.tournamentData.diferenciales.dam.yellow.selected ?
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    dam: {
                        ...props.tournamentData.diferenciales.dam,
                        yellow: {
                            ...props.tournamentData.diferenciales.dam.yellow, 
                                selected: true
                        }
                    }
                }
            })
            :
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    dam: {
                        ...props.tournamentData.diferenciales.dam,
                        yellow: {
                            ...props.tournamentData.diferenciales.dam.yellow, 
                                selected: false,
                                hcpFrom: null,
                                hcpTo: null
                        }
                    }
                }
            })
    }

    const handleDiferencialAmarillasDamasHcpFromOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                dam: {
                    ...props.tournamentData.diferenciales.dam,
                    yellow: {
                        ...props.tournamentData.diferenciales.dam.yellow, 
                            hcpFrom: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialAmarillasDamasHcpToOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                dam: {
                    ...props.tournamentData.diferenciales.dam,
                    yellow: {
                        ...props.tournamentData.diferenciales.dam.yellow, 
                            hcpTo: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialAzulesCaballerosOnChange = () => {
        !props.tournamentData.diferenciales.cab.blue.selected ?
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    cab: {
                        ...props.tournamentData.diferenciales.cab,
                        blue: {
                            ...props.tournamentData.diferenciales.cab.blue, 
                                selected: true
                        }
                    }
                }
            })
            :
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    cab: {
                        ...props.tournamentData.diferenciales.cab,
                        blue: {
                            ...props.tournamentData.diferenciales.cab.blue, 
                                selected: false,
                                hcpFrom: null,
                                hcpTo: null
                        }
                    }
                }
            })
    }

    const handleDiferencialAzulesCaballerosHcpFromOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                cab: {
                    ...props.tournamentData.diferenciales.cab,
                    blue: {
                        ...props.tournamentData.diferenciales.cab.blue, 
                            hcpFrom: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialAzulesCaballerosHcpToOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                cab: {
                    ...props.tournamentData.diferenciales.cab,
                    blue: {
                        ...props.tournamentData.diferenciales.cab.blue, 
                            hcpTo: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialBlancasCaballerosOnChange = () => {
        !props.tournamentData.diferenciales.cab.white.selected ?
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    cab: {
                        ...props.tournamentData.diferenciales.cab,
                        white: {
                            ...props.tournamentData.diferenciales.cab.white, 
                                selected: true
                        }
                    }
                }
            })
            :
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    cab: {
                        ...props.tournamentData.diferenciales.cab,
                        white: {
                            ...props.tournamentData.diferenciales.cab.white, 
                                selected: false,
                                hcpFrom: null,
                                hcpTo: null
                        }
                    }
                }
            })
    }

    const handleDiferencialBlancasCaballerosHcpFromOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                cab: {
                    ...props.tournamentData.diferenciales.cab,
                    white: {
                        ...props.tournamentData.diferenciales.cab.white, 
                            hcpFrom: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialBlancasCaballerosHcpToOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                cab: {
                    ...props.tournamentData.diferenciales.cab,
                    white: {
                        ...props.tournamentData.diferenciales.cab.white, 
                            hcpTo: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialAmarillasCaballerosOnChange = () => {
        !props.tournamentData.diferenciales.cab.yellow.selected ?
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    cab: {
                        ...props.tournamentData.diferenciales.cab,
                        yellow: {
                            ...props.tournamentData.diferenciales.cab.yellow, 
                                selected: true
                        }
                    }
                }
            })
            :
            props.setTournamentData({
                ...props.tournamentData,
                diferenciales: {
                    ...props.tournamentData.diferenciales,
                    cab: {
                        ...props.tournamentData.diferenciales.cab,
                        yellow: {
                            ...props.tournamentData.diferenciales.cab.yellow, 
                                selected: false,
                                hcpFrom: null,
                                hcpTo: null
                        }
                    }
                }
            })
    }

    const handleDiferencialAmarillasCaballerosHcpFromOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                cab: {
                    ...props.tournamentData.diferenciales.cab,
                    yellow: {
                        ...props.tournamentData.diferenciales.cab.yellow, 
                            hcpFrom: event.target.value
                    }
                }
            }
        })
    }

    const handleDiferencialAmarillasCaballerosHcpToOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData,
            diferenciales: {
                ...props.tournamentData.diferenciales,
                cab: {
                    ...props.tournamentData.diferenciales.cab,
                    yellow: {
                        ...props.tournamentData.diferenciales.cab.yellow, 
                            hcpTo: event.target.value
                    }
                }
            }
        })
    }

    const handleGreenFeeSociosOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData, greenFee: {
                ...props.tournamentData.greenFee, socios: event.target.value
            }
        })
    }

    const handleGreenFeeInvitadosOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData, greenFee: {
                ...props.tournamentData.greenFee, invitados: event.target.value
            }
        })
    }

    const handleGreenFeeNoSociosOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData, greenFee: {
                ...props.tournamentData.greenFee, noSocios: event.target.value
            }
        })
    }

    return (
        <div>
            <div className="form-group salidas-por-hoyo">
                <div>Salidas por el hoyo:</div>
                <div className=" form-row salidas-por-hoyo__container">
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            name="salidasPorElHoyo"
                            className="form-check-input"
                            value="1"
                            checked={checkIfSalidasPorHoyoIsChecked("1")}
                            onChange={handleTeeFromHoleOnChange}
                            id="salidasPorHoyo1" />
                        <label htmlFor="salidasPorHoyo1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="salidasPorElHoyo"
                            value="10"
                            checked={checkIfSalidasPorHoyoIsChecked("10")}
                            onChange={handleTeeFromHoleOnChange}
                            id="salidasPorHoyo10" />
                        <label htmlFor="salidasPorHoyo10">10</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="salidasPorElHoyo"
                            value="1y10"
                            checked={checkIfSalidasPorHoyoIsChecked("1y10")}
                            onChange={handleTeeFromHoleOnChange}
                            id="salidasPorHoyo1y10" />
                        <label htmlFor="salidasPorHoyo1y10">1 y 10</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="salidasPorElHoyo"
                            value="otro"
                            checked={checkIfSalidasPorHoyoIsChecked("otro")}
                            onChange={handleTeeFromHoleOnChange}
                            id="salidasPorHoyoOtro" />
                        <label htmlFor="salidasPorHoyoOtro">Otro</label>
                    </div>
                    {props.tournamentData.teeFromHole === 'otro' &&
                        <div className="tee-from-other-hole">
                            <select className="form-control">
                                <option value="default"></option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                            </select>
                        </div>
                    }
                </div>
            </div>
            <div className="tee-times">
                {props.tournamentData.teeFromHole === '1y10' && <h6>Hoyo 1</h6>}
                <div className="teeshot-times__container">
                    <div className="form-group">
                        <label htmlFor="firstTeeshot">Horario {!props.tournamentData.simultaneas ? '1ra salida' : 'salida'}</label>
                        <input type="time" id="firstTeeshot" className="form-control" defaultValue={props.tournamentData.firstTeetime} onChange={handleFirstTeetimeOnChange} />
                        {props.tournamentData.teeFromHole !== '1y10' &&
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="salidasSimultaneas"
                                    className="form-check-input"
                                    checked={props.tournamentData.simultaneas}
                                    onChange={handleSimultaneasOnChange} />
                                <label htmlFor="salidasSimultaneas" className="form-check-label" checked={props.tournamentData.simultaneas}>Salidas Simultáneas</label>
                            </div>
                        }
                    </div>
                    {!props.tournamentData.simultaneas &&
                        <div className="form-group">
                            <label htmlFor="minutesBetween">Minutos entre salidas: </label>
                            <input type="number" id="minutesBetween" defaultValue={props.tournamentData.minutesBetween} className="form-control" onChange={handleMinutesBetweenOnChange} />
                        </div>
                    }
                    {!props.tournamentData.simultaneas &&
                        <div className="form-group">
                            <label htmlFor="lastTeeshot">Horario ultima salida: </label>
                            <input type="time" id="lastTeeshot" className="form-control" defaultValue={props.tournamentData.lastTeetime} onChange={handleLastTeetimeOnChange} />
                        </div>
                    }
                </div>

            </div>
            {props.tournamentData.teeFromHole === '1y10' &&
                <div className="tee-times">
                    <h6>Hoyo 10</h6>
                    <div className="teeshot-times__container">
                        <div className="form-group">
                            <label htmlFor="firstTeeshot2">Horario 1ra salida: </label>
                            <input type="time" id="firstTeeshot2" className="form-control" defaultValue={props.tournamentData.firstTeetime2} onChange={handleFirstTeetime2OnChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="minutesBetween2">Minutos entre salidas: </label>
                            <input type="number" id="minutesBetween2" defaultValue={props.tournamentData.minutesBetween2} className="form-control" onChange={handleMinutesBetween2OnChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastTeeshot2">Horario ultima salida: </label>
                            <input type="time" id="lastTeeshot2" className="form-control" defaultValue={props.tournamentData.lastTeetime2} onChange={handleLastTeetime2OnChange} />
                        </div>
                    </div>
                </div>
            }
            {(props.tournamentData.simultaneas && props.tournamentData.firstTeetime) ||
                (!props.tournamentData.simultaneas && props.tournamentData.firstTeetime && props.tournamentData.lastTeetime && props.tournamentData.minutesBetween)
                ?
                <div className="diferenciales">
                    <h6>Diferenciales</h6>
                    <div className="diferenciales__container">
                        {(props.tournamentData.categories.dam.selected || props.tournamentData.categories.mix.selected) &&
                            <div className="form-group">
                                <div>Damas: </div>
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        id="diferencialRojoDamas" 
                                        checked={props.tournamentData.diferenciales.dam.red.selected}
                                        onChange={handleDiferencialRojasDamasOnChange}
                                        />
                                    <label htmlFor="diferencialRojoDamas" className="form-check-label">Rojas</label>
                                </div>
                                {props.tournamentData.diferenciales.dam.red.selected &&
                                 <div className="diferenciales__hcp-range">   
                                    <div className="form-group">
                                        <label htmlFor="hcpDesdeDiferencialRojasDamas">De: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpDesdeDiferencialRojasDamas" 
                                            defaultValue={props.tournamentData.diferenciales.dam.red.hcpFrom}
                                            onChange={handleDiferencialRojasDamasHcpFromOnChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hcpHastaDiferencialRojasDamas">A: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpHastaDiferencialRojasDamas" 
                                            defaultValue ={props.tournamentData.diferenciales.dam.red.hcpTo}
                                            onChange={handleDiferencialRojasDamasHcpToOnChange}/>
                                    </div>
                                 </div>
                                }
                                
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        id="diferencialAmarilloDamas" 
                                        checked={props.tournamentData.diferenciales.dam.yellow.selected}
                                        onChange={handleDiferencialAmarillasDamasOnChange}
                                        />
                                    <label htmlFor="diferencialAmarilloDamas" className="form-check-label">Amarillas</label>
                                </div>
                                {props.tournamentData.diferenciales.dam.yellow.selected &&
                                 <div className="diferenciales__hcp-range">   
                                    <div className="form-group">
                                        <label htmlFor="hcpDesdeDiferencialAmarillasDamas">De: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpDesdeDiferencialAmarillasDamas"
                                            defaultValue ={props.tournamentData.diferenciales.dam.yellow.hcpFrom}
                                            onChange={handleDiferencialAmarillasDamasHcpFromOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hcpHastaDiferencialAmarillasDamas">A: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpHastaDiferencialAmarillasDamas"
                                            defaultValue ={props.tournamentData.diferenciales.dam.yellow.hcpTo}
                                            onChange={handleDiferencialAmarillasDamasHcpToOnChange} />
                                    </div>
                                 </div>
                                }
                            </div>
                        }
                        {(props.tournamentData.categories.cab.selected || props.tournamentData.categories.mix.selected) &&
                            <div className="form-group">
                                <div>Caballeros: </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="diferencialAzulCaballeros"
                                        checked={props.tournamentData.diferenciales.cab.blue.selected}
                                        onChange={handleDiferencialAzulesCaballerosOnChange} />
                                    <label htmlFor="diferencialAzulCaballeros" className="form-check-label">Azules</label>
                                </div>
                                {props.tournamentData.diferenciales.cab.blue.selected &&
                                 <div className="diferenciales__hcp-range">   
                                    <div className="form-group">
                                        <label htmlFor="hcpDesdeDiferencialAzulesCaballeros">De: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpDesdeDiferencialAzulesCaballeros"
                                            defaultValue ={props.tournamentData.diferenciales.cab.blue.hcpFrom}
                                            onChange={handleDiferencialAzulesCaballerosHcpFromOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hcpHastaDiferencialAzulesCaballeros">A: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpHastaDiferencialAzulesCaballeros"
                                            defaultValue ={props.tournamentData.diferenciales.cab.blue.hcpTo}
                                            onChange={handleDiferencialAzulesCaballerosHcpToOnChange} />
                                    </div>
                                 </div>
                                }
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        id="diferencialBlancoCaballeros" 
                                        checked={props.tournamentData.diferenciales.cab.white.selected}
                                        onChange={handleDiferencialBlancasCaballerosOnChange}
                                        />
                                    <label htmlFor="diferencialBlancoCaballeros" className="form-check-label">Blancas</label>
                                </div>
                                {props.tournamentData.diferenciales.cab.white.selected &&
                                 <div className="diferenciales__hcp-range">   
                                    <div className="form-group">
                                        <label htmlFor="hcpDesdeDiferencialBlancasCaballeros">De: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpDesdeDiferencialBlancasCaballeros"
                                            defaultValue ={props.tournamentData.diferenciales.cab.white.hcpFrom}
                                            onChange={handleDiferencialBlancasCaballerosHcpFromOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hcpHastaDiferencialBlancasCaballeros">A: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpHastaDiferencialBlancasCaballeros"
                                            defaultValue ={props.tournamentData.diferenciales.cab.white.hcpTo}
                                            onChange={handleDiferencialBlancasCaballerosHcpToOnChange} />
                                    </div>
                                 </div>
                                }
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        id="diferencialAmarilloCaballeros" 
                                        checked={props.tournamentData.diferenciales.cab.yellow.selected}
                                        onChange={handleDiferencialAmarillasCaballerosOnChange}
                                        />
                                    <label htmlFor="diferencialAmarilloCaballeros" className="form-check-label">Amarillas</label>
                                </div>
                                {props.tournamentData.diferenciales.cab.yellow.selected &&
                                 <div className="diferenciales__hcp-range">   
                                    <div className="form-group">
                                        <label htmlFor="hcpDesdeDiferencialAmarillasCaballeros">De: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpDesdeDiferencialAmarillasCaballeros"
                                            defaultValue ={props.tournamentData.diferenciales.cab.yellow.hcpFrom}
                                            onChange={handleDiferencialAmarillasCaballerosHcpFromOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hcpHastaDiferencialAmarillasCaballeros">A: </label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="hcpHastaDiferencialAmarillasCaballeros"
                                            defaultValue ={props.tournamentData.diferenciales.cab.yellow.hcpTo}
                                            onChange={handleDiferencialAmarillasCaballerosHcpToOnChange} />
                                    </div>
                                 </div>
                                }
                            </div>
                        }

                    </div>
                </div>
                :
                null
            }
            {(props.tournamentData.simultaneas && props.tournamentData.firstTeetime) || 
                (!props.tournamentData.simultaneas && props.tournamentData.firstTeetime && props.tournamentData.lastTeetime && props.tournamentData.minutesBetween) 
                ?
                <div className="green-fees">
                    <h6>Green Fee</h6>
                    <div className="green-fees__container">
                        <div className="form-group">
                            <label htmlFor="greenFeeSocios">Valor Green Fee para Socios: </label>
                            <input 
                                type="number" 
                                id="greenFeeSocios" 
                                className="form-control" 
                                min="1" 
                                step="any" 
                                defaultValue={props.tournamentData.greenFee.socios}
                                onChange={handleGreenFeeSociosOnChange}/>
                        </div>
                        {(props.tournamentData.status === 'Semi-Abierto' || props.tournamentData.status === 'Abierto') &&
                            <div className="form-group">
                                <label htmlFor="greenFeeInvitados">Valor Green Fee para Invitados: </label>
                                <input 
                                    type="number" 
                                    id="greenFeeInvitados" 
                                    className="form-control" 
                                    min="1" 
                                    step="any"
                                    defaultValue={props.tournamentData.greenFee.invitados}
                                    onChange={handleGreenFeeInvitadosOnChange} />
                            </div>
                        }
                        {props.tournamentData.status === 'Abierto' && 
                            <div className="form-group">
                                <label htmlFor="greenFeeNoSocios">Valor Green Fee para No Socios: </label>
                                <input 
                                    type="number" 
                                    id="greenFeeNoSocios" 
                                    className="form-control" 
                                    min="1" 
                                    step="any"
                                    defaultValue={props.tournamentData.greenFee.noSocios}
                                    onChange={handleGreenFeeNoSociosOnChange} />
                            </div>
                        }
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default CreatePart3;