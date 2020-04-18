import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';

import CreatePart1 from '../components/CreatePart1';
import CreatePart2 from '../components/CreatePart2';
import CreatePart3 from '../components/CreatePart3';
import CreatePart4 from '../components/CreatePart4';
import './CreateTournament.css';

const DUMMY_CATEGORIES = {
    dam: ['Scratch', '0-15', '0-20', '16-36', '21-36'],
    cab: ['Scratch', '0-9', '0-16', '0-20', '10-16', '17-24', '17-36', '25-36'],
    mix: ['Scratch', '0-16', '17-36']
};

const CreateTournament = () => {
    const [showModal, setShowModal] = useState(false);
    const [createPart, setCreatePart] = useState(1);
    const [categoriasCaballerosIsOpen, setCategoriasCaballerosIsOpen] = useState(false);
    const [categoriasDamasIsOpen, setCategoriasDamasIsOpen] = useState(false);
    const [categoriasMixtoIsOpen, setCategoriasMixtoIsOpen] = useState(false);
    const [damasUnicaSelected, setDamasUnicaSelected] = useState(false);
    const [caballerosUnicaSelected, setCaballerosUnicaSelected] = useState(false);
    const [mixtoUnicaSelected, setMixtoUnicaSelected] = useState(false);
    const [tournamentData, setTournamentData] = useState({
        name: null,
        type: null,
        subtype: null,
        players: "4",
        division: false,
        divisionAt: null,
        categories: {
            dam: {
                selected: false,
                cat: []
            },
            cab: {
                selected: false,
                cat: []
            },
            mix: {
                selected: false,
                cat: []
            }
        },
        holes: null,
        date: {},
        status: null,
        teeFromHole: "1",
        firstTeetime: null,
        minutesBetween: 9,
        lastTeetime: null,
        firstTeetime2: null,
        minutesBetween2: 9,
        lastTeetime2: null,
        simultaneas: false,
        diferenciales: {
            dam: {
                red: { selected: false, hcpFrom: null, hcpTo: null },
                yellow: { selected: false, hcpFrom: null, hcpTo: null }
            },
            cab: {
                blue: { selected: false, hcpFrom: null, hcpTo: null },
                white: { selected: false, hcpFrom: null, hcpTo: null },
                yellow: { selected: false, hcpFrom: null, hcpTo: null }
            }
        },
        greenFee: {
            socios: null,
            invitados: null,
            noSocios: null
        },
        inscriptionDate: null,
        inscriptionTime: null
    })

    const handlePrevOnClick = () => {
        if (createPart > 1) {
            setCreatePart(createPart - 1);
        }
    }

    const handleNextOnClick = () => {
        if (createPart < 5) {
            setCreatePart(createPart + 1);
        }
    }

    const handleOnCreateTournamentSubmit = () => {
        console.log('Tournament created succesfully!!!!')
        console.log(tournamentData);
    }

    const handleCancelOnClick = () => {
        setTournamentData({
            name: null,
            type: null,
            subtype: null,
            players: "4",
            division: false,
            divisionAt: null,
            categories: {
                dam: {
                    selected: false,
                    cat: []
                },
                cab: {
                    selected: false,
                    cat: []
                },
                mix: {
                    selected: false,
                    cat: []
                }
            },
            holes: null,
            date: {},
            status: null,
            teeFromHole: "1",
            firstTeetime: null,
            minutesBetween: 9,
            lastTeetime: null,
            firstTeetime2: null,
            minutesBetween2: 9,
            lastTeetime2: null,
            simultaneas: false,
            diferenciales: {
                dam: {
                    red: { selected: false, hcpFrom: null, hcpTo: null },
                    yellow: { selected: false, hcpFrom: null, hcpTo: null }
                },
                cab: {
                    blue: { selected: false, hcpFrom: null, hcpTo: null },
                    white: { selected: false, hcpFrom: null, hcpTo: null },
                    yellow: { selected: false, hcpFrom: null, hcpTo: null }
                }
            },
            greenFee: {
                socios: null,
                invitados: null,
                noSocios: null
            },
            inscriptionDate: null,
            inscriptionTime: null
        });
        setShowModal(false);
        setCreatePart(1);

    }

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div className="main-body">
            <h1 className="title">Nuevo Torneo</h1>
            <Breadcrumb>
                <Breadcrumb.Item active className={createPart === 1 && 'breadcrumb-current'}>Información General</Breadcrumb.Item>
                <Breadcrumb.Item active className={createPart === 2 && 'breadcrumb-current'}>Hoyos, Fecha y Estado</Breadcrumb.Item>
                <Breadcrumb.Item active className={createPart === 3 && 'breadcrumb-current'}>Horarios, Diferenciales y Precios</Breadcrumb.Item>
                <Breadcrumb.Item active className={createPart === 4 && 'breadcrumb-current'}>Inscripciones y Resumen Final</Breadcrumb.Item>
            </Breadcrumb>
            <div className="create-tournament__form-container">
                {createPart === 1 &&
                    <CreatePart1
                        tournamentData={tournamentData}
                        setTournamentData={setTournamentData}
                        DUMMY_CATEGORIES={DUMMY_CATEGORIES}
                        categoriasDamasIsOpen={categoriasDamasIsOpen}
                        setCategoriasDamasIsOpen={setCategoriasDamasIsOpen}
                        categoriasCaballerosIsOpen={categoriasCaballerosIsOpen}
                        setCategoriasCaballerosIsOpen={setCategoriasCaballerosIsOpen}
                        categoriasMixtoIsOpen={categoriasMixtoIsOpen}
                        setCategoriasMixtoIsOpen={setCategoriasMixtoIsOpen}
                        damasUnicaSelected={damasUnicaSelected}
                        setDamasUnicaSelected={setDamasUnicaSelected}
                        caballerosUnicaSelected={caballerosUnicaSelected}
                        setCaballerosUnicaSelected={setCaballerosUnicaSelected}
                        mixtoUnicaSelected={mixtoUnicaSelected}
                        setMixtoUnicaSelected={setMixtoUnicaSelected}
                    />
                }
                {createPart === 2 &&
                    <CreatePart2
                        tournamentData={tournamentData}
                        setTournamentData={setTournamentData}
                    />
                }
                {createPart === 3 &&
                    <CreatePart3
                        tournamentData={tournamentData}
                        setTournamentData={setTournamentData}
                    />
                }

                {createPart === 4 &&
                    <CreatePart4
                        tournamentData={tournamentData}
                        setTournamentData={setTournamentData}
                    />
                }

                {(createPart === 4 && tournamentData.inscriptionTime) &&
                    <div className="submit-createTournament-btn">
                        <button className="btn btn-primary" onClick={handleOnCreateTournamentSubmit}>Crear Torneo</button>
                        <button className="btn btn-danger" onClick={handleShowModal}>Cancelar</button>
                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Cancelar Nuevo Torneo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="container">
                                    ¿Estás seguro que deseas cancelar? No se guardará ningún cambio.
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-secondary" onClick={handleCloseModal}>
                                    Cerrar
                                </button>
                                <button className="btn btn-primary" onClick={handleCancelOnClick}>
                                    Aceptar
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                }

                <div className="prev-next__container">
                    {createPart > 1 &&
                        <div className="prev-next__arrow" onClick={handlePrevOnClick}>
                            <span><FontAwesomeIcon icon={faArrowLeft} /> Anterior</span>
                        </div>
                    }
                    {createPart < 4 &&
                        <div className="prev-next__arrow" onClick={handleNextOnClick}>
                            <span>Siguiente <FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CreateTournament;