import React from 'react';

import './CreatePart2.css';

const CreatePart2 = props => {

    const handleHolesOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, holes: event.target.value });
    };

    const handleDate1OnChange = event => {
        props.setTournamentData({ ...props.tournamentData, date: { ...props.tournamentData.date, round1: event.target.value } });
    };

    const handleDate2OnChange = event => {
        props.setTournamentData({ ...props.tournamentData, date: { ...props.tournamentData.date, round2: event.target.value } });
    };

    const handleDate3OnChange = event => {
        props.setTournamentData({ ...props.tournamentData, date: { ...props.tournamentData.date, round3: event.target.value } });
    };

    const handleDate4OnChange = event => {
        props.setTournamentData({ ...props.tournamentData, date: { ...props.tournamentData.date, round4: event.target.value } });
    };

    const handleStatusOnChange = event => {
        props.setTournamentData({...props.tournamentData, status: event.target.value});
    };

    return (
        <div className="create-tournament__form-container">
            <div className="form-group">
                <label htmlFor="cantidad-hoyos">Hoyos: </label>
                <select className="custom-select mr-sm-2" id="cantidad-hoyos" defaultValue={props.tournamentData.holes} onChange={handleHolesOnChange}>
                    <option value="default"></option>
                    <option value="9">9</option>
                    <option value="18">18</option>
                    <option value="36">36</option>
                    <option value="54">54</option>
                    <option value="72">72</option>
                </select>
            </div>
            {props.tournamentData.holes && props.tournamentData.holes !== 'default' &&
                <div className="form-group round-dates__container">
                    <div className="round-dates__item">
                        <label htmlFor="fecha-ronda-1">Fecha{+props.tournamentData.holes >= 36 && ' Ronda 1'}: </label>
                        <input type="date" className="form-control" id="fecha-ronda-1" defaultValue={props.tournamentData.date.round1} onChange={handleDate1OnChange} />
                    </div>

                    {+props.tournamentData.holes >= 36 &&
                        <div className="round-dates__item">
                            <label htmlFor="fecha-ronda-2">Fecha Ronda 2: </label>
                            <input type="date" className="form-control" id="fecha-ronda-2" defaultValue={props.tournamentData.date.round2} onChange={handleDate2OnChange} />
                        </div>
                    }
                    {+props.tournamentData.holes >= 54 &&
                        <div className="round-dates__item">
                            <label htmlFor="fecha-ronda-3">Fecha Ronda 3: </label>
                            <input type="date" className="form-control" id="fecha-ronda-3" defaultValue={props.tournamentData.date.round3} onChange={handleDate3OnChange} />
                        </div>
                    }
                    {+props.tournamentData.holes >= 72 &&
                        <div className="round-dates__item">
                            <label htmlFor="fecha-ronda-4">Fecha Ronda 4: </label>
                            <input type="date" className="form-control" id="fecha-ronda-4" defaultValue={props.tournamentData.date.round4} onChange={handleDate4OnChange} />
                        </div>
                    }

                </div>
            }
            {(+props.tournamentData.holes === 9 && Object.keys(props.tournamentData.date).length === 1) ||
                (+props.tournamentData.holes === 18 && Object.keys(props.tournamentData.date).length === 1) ||
                (+props.tournamentData.holes === 36 && Object.keys(props.tournamentData.date).length === 2) ||
                (+props.tournamentData.holes === 54 && Object.keys(props.tournamentData.date).length === 3) ||
                (+props.tournamentData.holes === 72 && Object.keys(props.tournamentData.date).length === 4) ?
                <div className="socios-status">
                    <label htmlFor="sociosStatus">Estado: </label>
                    <select className="custom-select mr-sm-2" id="sociosStatus" defaultValue={props.tournamentData.status} onChange={handleStatusOnChange}>
                        <option value="default"></option>
                        <option value="Cerrado">Cerrado (Solo socios)</option>
                        <option value="Semi-Abierto">Semi-Abierto (Socios e invitados)</option>
                        <option value="Abierto">Abierto (Socios, Invitados y No socios)</option>
                    </select>
                </div>
                :
                null
            }
        </div>
    )
}

export default CreatePart2;