import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './CreatePart1.css';
const CreatePart1 = props => {

    const [showDamasModal, setShowDamasModal] = useState(false);
    const [showCaballerosModal, setShowCaballerosModal] = useState(false);
    const [showMixtoModal, setShowMixtoModal] = useState(false);
    const [newCategoryFrom, setNewCategoryFrom] = useState(null);
    const [newCategoryTo, setNewCategoryTo] = useState(null);

    const handleCloseDamasModal = () => setShowDamasModal(false);
    const handleShowDamasModal = () => setShowDamasModal(true);
    const handleCloseCaballerosModal = () => setShowCaballerosModal(false);
    const handleShowCaballerosModal = () => setShowCaballerosModal(true);
    const handleCloseMixtoModal = () => setShowMixtoModal(false);
    const handleShowMixtoModal = () => setShowMixtoModal(true);


    const handleNameChange = event => {
        props.setTournamentData({ ...props.tournamentData, name: event.target.value })
    }

    const handleTypeOnChange = event => {
        props.setTournamentData({
            ...props.tournamentData, type: event.target.value === 'default' ? null
                :
                event.target.value,
            subtype: null,
            players: "4",
            division: false,
            divisionAt: null,
            categories: {
                dam: { selected: false, cat: [] },
                cab: { selected: false, cat: [] },
                mix: { selected: false, cat: [] }
            }
        })
        props.setCategoriasCaballerosIsOpen(false);
        props.setCategoriasDamasIsOpen(false);
        props.setCategoriasMixtoIsOpen(false);
    }

    const handleSubTypeOnChange = event => {
        event.target.value === 'default' ?
            props.setTournamentData({ ...props.tournamentData, subtype: null }) :
            props.setTournamentData({ ...props.tournamentData, subtype: event.target.value })
    }

    const handlePlayersOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, players: event.target.value })
    }

    const handleDivisionPlayersOnChange = () => {
        !props.tournamentData.division ?
            props.setTournamentData({ ...props.tournamentData, division: true })
            :
            props.setTournamentData({ ...props.tournamentData, division: false })
    }

    const handleDivisionPlayersAtOnChange = event => {
        props.setTournamentData({ ...props.tournamentData, divisionAt: event.target.value })
    }

    const handleDamasOnChange = () => {
        if (!props.tournamentData.categories.dam.selected) {
            props.setTournamentData({
                ...props.tournamentData, categories:
                {
                    ...props.tournamentData.categories,
                    dam: { selected: true, cat: [] },
                    mix: { selected: false, cat: [] }
                }
            });
            props.setCategoriasMixtoIsOpen(false);
            props.setMixtoUnicaSelected(false);
        } else {
            props.setTournamentData({
                ...props.tournamentData, categories:
                {
                    ...props.tournamentData.categories,
                    dam: { selected: false, cat: [] }
                }
            });
            props.setCategoriasDamasIsOpen(false);
            props.setDamasUnicaSelected(false);
        }
    }

    const handleCaballerosOnChange = () => {
        if (!props.tournamentData.categories.cab.selected) {
            props.setTournamentData({
                ...props.tournamentData, categories:
                {
                    ...props.tournamentData.categories,
                    cab: { selected: true, cat: [] },
                    mix: { selected: false, cat: [] }
                }
            });
            props.setCategoriasMixtoIsOpen(false);
            props.setMixtoUnicaSelected(false);
        } else {
            props.setTournamentData({
                ...props.tournamentData, categories:
                {
                    ...props.tournamentData.categories,
                    cab: { selected: false, cat: [] }
                }
            })
            props.setCategoriasCaballerosIsOpen(false);
            props.setCaballerosUnicaSelected(false);
        }
    }

    const handleMixtoOnChange = () => {
        if (!props.tournamentData.categories.mix.selected) {
            props.setTournamentData({
                ...props.tournamentData, categories:
                {
                    ...props.tournamentData.categories,
                    mix: { selected: true, cat: [] },
                    cab: { selected: false, cat: [] },
                    dam: { selected: false, cat: [] }
                }
            });
            props.setCategoriasDamasIsOpen(false);
            props.setDamasUnicaSelected(false);
            props.setCategoriasCaballerosIsOpen(false);
            props.setCaballerosUnicaSelected(false);
        } else {
            props.setTournamentData({
                ...props.tournamentData, categories:
                {
                    ...props.tournamentData.categories,
                    mix: { selected: false, cat: [] }
                }
            });
            props.setCategoriasMixtoIsOpen(false);
            props.setMixtoUnicaSelected(false);
        }
    }

    const handleCategoryDamasUnicaOnChange = event => {
        props.setCategoriasDamasIsOpen(false);
        props.setDamasUnicaSelected(true);
        props.setTournamentData({
            ...props.tournamentData, categories:
            {
                ...props.tournamentData.categories,
                dam: {
                    ...props.tournamentData.categories.dam,
                    cat: [event.target.value]
                }
            }
        })
    }

    const handleCategoryCaballerosUnicaOnChange = event => {
        props.setCategoriasCaballerosIsOpen(false);
        props.setCaballerosUnicaSelected(true);
        props.setTournamentData({
            ...props.tournamentData, categories:
            {
                ...props.tournamentData.categories,
                cab: {
                    ...props.tournamentData.categories.cab,
                    cat: [event.target.value]
                }
            }
        })
    }

    const handleCategoryMixtoUnicaOnChange = event => {
        props.setCategoriasMixtoIsOpen(false);
        props.setMixtoUnicaSelected(true);
        props.setTournamentData({
            ...props.tournamentData, categories:
            {
                ...props.tournamentData.categories,
                mix: {
                    ...props.tournamentData.categories.mix,
                    cat: [event.target.value]
                }
            }
        })
    }

    const handleDamasChooseCategoriesOnSelected = () => {
        props.setCategoriasDamasIsOpen(true);
        props.setDamasUnicaSelected(false);
        props.setTournamentData({
            ...props.tournamentData,
            categories: {
                ...props.tournamentData.categories,
                dam: { ...props.tournamentData.categories.dam, cat: [] }
            }
        })
    }

    const handleCaballerosChooseCategoriesOnSelected = () => {
        props.setCategoriasCaballerosIsOpen(true);
        props.setCaballerosUnicaSelected(false);
        props.setTournamentData({
            ...props.tournamentData,
            categories: {
                ...props.tournamentData.categories,
                cab: { ...props.tournamentData.categories.cab, cat: [] }
            }
        })
    }

    const handleMixtoChooseCategoriesOnSelected = () => {
        props.setCategoriasMixtoIsOpen(true);
        props.setMixtoUnicaSelected(false);
        props.setTournamentData({
            ...props.tournamentData,
            categories: {
                ...props.tournamentData.categories,
                mix: { ...props.tournamentData.categories.mix, cat: [] }
            }
        })
    }

    const handleCategoryInDamasOnChange = event => {
        let array = props.tournamentData.categories.dam.cat;
        let element = event.target.value.toString();
        let index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
            props.setTournamentData({
                ...props.tournamentData,
                categories: {
                    ...props.tournamentData.categories,
                    dam: { ...props.tournamentData.categories.dam, cat: array }
                }
            })
        } else {

            props.setTournamentData({
                ...props.tournamentData,
                categories: {
                    ...props.tournamentData.categories,
                    dam: {
                        ...props.tournamentData.categories.dam,
                        cat: [...props.tournamentData.categories.dam.cat, event.target.value]
                    }
                }
            })
        }
    }

    const handleCategoryInCaballerosOnChange = event => {
        let array = props.tournamentData.categories.cab.cat;
        let element = event.target.value.toString();
        let index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
            props.setTournamentData({
                ...props.tournamentData,
                categories: {
                    ...props.tournamentData.categories,
                    cab: { ...props.tournamentData.categories.cab, cat: array }
                }
            })
        } else {

            props.setTournamentData({
                ...props.tournamentData,
                categories: {
                    ...props.tournamentData.categories,
                    cab: {
                        ...props.tournamentData.categories.cab,
                        cat: [...props.tournamentData.categories.cab.cat, event.target.value]
                    }
                }
            })
        }
    }

    const handleCategoryInMixtoOnChange = event => {
        let array = props.tournamentData.categories.mix.cat;
        let element = event.target.value.toString();
        let index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
            props.setTournamentData({
                ...props.tournamentData,
                categories: {
                    ...props.tournamentData.categories,
                    mix: { ...props.tournamentData.categories.mix, cat: array }
                }
            })
        } else {

            props.setTournamentData({
                ...props.tournamentData,
                categories: {
                    ...props.tournamentData.categories,
                    mix: {
                        ...props.tournamentData.categories.mix,
                        cat: [...props.tournamentData.categories.mix.cat, event.target.value]
                    }
                }
            })
        }
    }

    

    const handleAddDamasCategory = () => {
        props.DUMMY_CATEGORIES.dam.push(`${newCategoryFrom}-${newCategoryTo}`);
        handleCloseDamasModal();
    }

    const handleAddCaballerosCategory = () => {
        props.DUMMY_CATEGORIES.cab.push(`${newCategoryFrom}-${newCategoryTo}`);
        handleCloseCaballerosModal();
    }

    const handleAddMixtoCategory = () => {
        props.DUMMY_CATEGORIES.mix.push(`${newCategoryFrom}-${newCategoryTo}`);
        handleCloseMixtoModal();
    }

    const isCategoryCheckedDamas = (cat) => {
        let index = props.tournamentData.categories.dam.cat.indexOf(cat);
        if(index > -1){
            return true;
        }else{
            return false;
        }
    }

    const isCategoryCheckedCaballeros = (cat) => {
        let index = props.tournamentData.categories.cab.cat.indexOf(cat);
        if(index > -1){
            return true;
        }else{
            return false;
        }
    }

    const isCategoryCheckedMixto = (cat) => {
        let index = props.tournamentData.categories.mix.cat.indexOf(cat);
        if(index > -1){
            return true;
        }else{
            return false;
        }
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="tournamentName">Nombre del Torneo:</label>
                <input
                    type="text"
                    className="form-control"
                    id="tournamentName"
                    placeholder="Ingresar nombre del torneo..."
                    defaultValue={props.tournamentData.name}
                    onChange={handleNameChange} />
            </div>

            <div className="form-group">
                <label htmlFor="tournamentModalidad">Modalidad:</label>
                <select className="custom-select mr-sm-2" defaultValue={props.tournamentData.type} onChange={handleTypeOnChange}>
                    <option value="default"></option>
                    <option value="Individual">Individual</option>
                    <option value="Fourball">Fourball</option>
                    <option value="Laguneada">Laguneada</option>
                    <option value="Foursomes">Foursomes</option>
                </select>
            </div>

            {props.tournamentData.type === 'Individual' &&
                <div className="form-group">
                    <label htmlFor="tournamentSubType">Sub-Modalidad:</label>
                    <select className="custom-select mr-sm-2" id="tournamentSubType" defaultValue={props.tournamentData.subtype} onChange={handleSubTypeOnChange}>
                        <option value="default"></option>
                        <option value="Medal Play">Medal Play</option>
                        <option value="Stableford">Stableford</option>
                        <option value="Contra Par">Contra Par</option>
                        <option value="Contra Bogey">Contra Bogey</option>
                        <option value="Flag Competition">Flag Competition</option>
                    </select>
                </div>
            }

            {props.tournamentData.type === 'Fourball' &&
                <div className="form-group">
                    <label htmlFor="tournamentSubType">Sub-Modalidad:</label>
                    <select className="custom-select mr-sm-2" id="tournamentSubType" defaultValue={props.tournamentData.subtype} onChange={handleSubTypeOnChange}>
                        <option value="default"></option>
                        <option value="Americano">Americano - Mejor Pelota</option>
                        <option value="Americano Suma">Americano - Suma de Dos Pelotas</option>
                        <option value="Clásico">Clásico - Mejor Pelota</option>
                        <option value="Clásico Suma">Clásico - Suma de Dos Pelotas</option>
                    </select>
                </div>
            }

            {props.tournamentData.type === 'Laguneada' &&
                <div className="form-group">
                    <label htmlFor="tournamentSubType">Sub-Modalidad:</label>
                    <select className="custom-select mr-sm-2" id="tournamentSubType" defaultValue={props.tournamentData.subtype} onChange={handleSubTypeOnChange}>
                        <option value="default"></option>
                        <option value="Mejor Pelota">Mejor Pelota</option>
                        <option value="Suma Dos Mejores Pelotas">Suma de las Dos Mejores Pelotas</option>
                        <option value="Suma Tres Mejores Pelotas">Suma de las Tres Mejores Pelotas</option>
                        <option value="Suma Mejor y Peor Pelota">Suma de la Mejor y la Peor Pelota</option>
                        <option value="Suma Cuatro Pelotas">Suma de las Cuatro Pelotas</option>
                    </select>
                </div>
            }

            {props.tournamentData.type === 'Foursomes' &&
                <div className="form-group">
                    <label htmlFor="tournamentSubType">Sub-Modalidad:</label>
                    <select className="custom-select mr-sm-2" id="tournamentSubType" defaultValue={props.tournamentData.subtype} onChange={handleSubTypeOnChange}>
                        <option value="default"></option>
                        <option value="Foursomes">Tradicional</option>
                        <option value="Canadian">Canadian</option>
                        <option value="Chapman">Chapman</option>
                    </select>
                </div>
            }

            {(props.tournamentData.type === 'Individual' && props.tournamentData.subtype) &&
                <div className="form-group">
                    <label htmlFor="tournamentPlayersPerLine">Jugadores por Línea: </label>
                    <select className="custom-select mr-sm-2" id="tournamentPlayersPerLine" defaultValue={props.tournamentData.players} onChange={handlePlayersOnChange}>
                        <option value="4">4</option>
                        <option value="3">3</option>
                    </select>
                </div>
            }

            {(props.tournamentData.type === 'Individual' && props.tournamentData.subtype && props.tournamentData.players === "3") &&
                <div className="four-players-time">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="fourPlayersSince"
                            name="fourPlayersAt"
                            checked={props.tournamentData.division}
                            onChange={handleDivisionPlayersOnChange}
                            className="form-check-input"
                        ></input>
                        <label htmlFor="fourPlayersSince" className="form-check-label">4 Jugadores por línea a partir de las: </label>
                    </div>
                    {props.tournamentData.division &&
                        <div>
                            <input
                                type="time"
                                className="form-control"
                                defaultValue={props.tournamentData.divisionAt}
                                onChange={handleDivisionPlayersAtOnChange} />
                        </div>
                    }
                </div>
            }

            {(props.tournamentData.subtype && props.tournamentData.subtype !== 'default') &&
                <div className="create-tournament__categorias">
                    <p className="categories-label">Categorías:</p>
                    <div className="create-tournament__categorias-container">
                        <div className="create-tournament__categorias-col">
                            <div className="form-check sex-checkbox">
                                <input
                                    type="checkbox"
                                    id="categoriaDamas"
                                    name="Damas"
                                    checked={props.tournamentData.categories.dam.selected}
                                    onChange={handleDamasOnChange}
                                    className="form-check-input"
                                ></input>
                                <label htmlFor="categoriaDamas" className="form-check-label">Damas</label>
                            </div>

                            {props.tournamentData.categories.dam.selected &&
                                <div className="categories-checkboxes">
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="damCategories" 
                                            id="damCategoryUnica" 
                                            value="0-36" 
                                            checked={props.damasUnicaSelected}
                                            onChange={handleCategoryDamasUnicaOnChange} />
                                        <label className="form-check-label" htmlFor="damCategoryUnica">Unica</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="damCategories"
                                            id="damCategorySelect"
                                            checked={props.categoriasDamasIsOpen}
                                            onChange={handleDamasChooseCategoriesOnSelected} />
                                        <label className="form-check-label" htmlFor="damCategorySelect">Categorías</label>
                                    </div>
                                    {props.categoriasDamasIsOpen &&
                                        <div className="categories-checkboxes">
                                            {props.DUMMY_CATEGORIES.dam.map((cat, i) => {
                                                return (
                                                    <div className="form-check" key={i}>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="damCategories"
                                                            id={`damCategory${i}`}
                                                            value={cat}
                                                            checked={isCategoryCheckedDamas(cat)}
                                                            onChange={handleCategoryInDamasOnChange} />
                                                        <label className="form-check-label" htmlFor={`damCategory${i}`}>{cat}</label>
                                                    </div>
                                                )
                                            })}
                                            <div className="create-new-category">
                                                <div className="btn btn-sm btn-primary" onClick={handleShowDamasModal}>+ Categoría</div>
                                            </div>
                                            <Modal show={showDamasModal} onHide={handleCloseDamasModal}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Crear Categoría: Damas</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label htmlFor="desdeHandicap">Desde: </label>
                                                                <input type="number" className="form-control" onChange={(e) => setNewCategoryFrom(e.target.value)} />
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label htmlFor="hastaHandicap">Hasta: </label>
                                                                <input type="number" className="form-control" onChange={(e) => setNewCategoryTo(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-secondary" onClick={handleCloseDamasModal}>
                                                        Cancelar
                                                            </button>
                                                    <button className="btn btn-primary" onClick={handleAddDamasCategory}>
                                                        Crear Categoría
                                                            </button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <div className="create-tournament__categorias-col">
                            <div className="form-check sex-checkbox">
                                <input
                                    type="checkbox"
                                    id="categoriaCaballeros"
                                    name="Caballeros"
                                    checked={props.tournamentData.categories.cab.selected}
                                    onChange={handleCaballerosOnChange}
                                    className="form-check-input"
                                ></input>
                                <label htmlFor="categoriaCaballeros" className="form-check-label">Caballeros</label>
                            </div>
                            {props.tournamentData.categories.cab.selected &&
                                <div className="categories-checkboxes">
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="cabCategories" 
                                            id="cabCategorUnica" 
                                            value="0-36" 
                                            checked={props.caballerosUnicaSelected}
                                            onChange={handleCategoryCaballerosUnicaOnChange} />
                                        <label className="form-check-label" htmlFor="cabCategorUnica">Unica</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="cabCategories" 
                                            id="cabCategorySelect"
                                            checked={props.categoriasCaballerosIsOpen} 
                                            onChange={handleCaballerosChooseCategoriesOnSelected} />
                                        <label className="form-check-label" htmlFor="cabCategorySelect">Categorías</label>
                                    </div>
                                    {props.categoriasCaballerosIsOpen &&
                                        <div className="categories-checkboxes">
                                            {props.DUMMY_CATEGORIES.cab.map((cat, i) => {
                                                return (
                                                    <div className="form-check" key={i}>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="cabCategories"
                                                            id={`cabCategory${i}`}
                                                            value={cat}
                                                            checked={isCategoryCheckedCaballeros(cat)}
                                                            onChange={handleCategoryInCaballerosOnChange} />
                                                        <label className="form-check-label" htmlFor={`cabCategory${i}`}>{cat}</label>
                                                    </div>
                                                )
                                            })}
                                            <div className="create-new-category">
                                                <div className="btn btn-sm btn-primary" onClick={handleShowCaballerosModal}>+ Categoría</div>
                                            </div>
                                            <Modal show={showCaballerosModal} onHide={handleCloseCaballerosModal}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Crear Categoría: Caballeros</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label htmlFor="desdeHandicap">Desde: </label>
                                                                <input type="number" className="form-control" onChange={(e) => setNewCategoryFrom(e.target.value)} />
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label htmlFor="hastaHandicap">Hasta: </label>
                                                                <input type="number" className="form-control" onChange={(e) => setNewCategoryTo(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-secondary" onClick={handleCloseCaballerosModal}>
                                                        Cancelar
                                                            </button>
                                                    <button className="btn btn-primary" onClick={handleAddCaballerosCategory}>
                                                        Crear Categoría
                                                            </button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <div className="create-tournament__categorias-col">
                            <div className="form-check sex-checkbox">
                                <input
                                    type="checkbox"
                                    id="categoriaMixto"
                                    name="Mixto"
                                    checked={props.tournamentData.categories.mix.selected}
                                    onChange={handleMixtoOnChange}
                                    className="form-check-input"
                                ></input>
                                <label htmlFor="categoriaMixto" className="form-check-label">Mixto</label>
                            </div>
                            {props.tournamentData.categories.mix.selected &&
                                <div className="categories-checkboxes">
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="mixCategories" 
                                            id="mixCategorUnica" 
                                            value="0-36" 
                                            checked={props.mixtoUnicaSelected}
                                            onChange={handleCategoryMixtoUnicaOnChange} />
                                        <label className="form-check-label" htmlFor="mixCategorUnica">Unica</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="mixCategories" 
                                            id="mixCategorySelect"
                                            checked={props.categoriasMixtoIsOpen} 
                                            onChange={handleMixtoChooseCategoriesOnSelected} />
                                        <label className="form-check-label" htmlFor="mixCategorySelect">Categorías</label>
                                    </div>
                                    {props.categoriasMixtoIsOpen &&
                                        <div className="categories-checkboxes">
                                            {props.DUMMY_CATEGORIES.mix.map((cat, i) => {
                                                return (
                                                    <div className="form-check" key={i}>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="mixCategories"
                                                            id={`mixCategory${i}`}
                                                            value={cat}
                                                            checked={isCategoryCheckedMixto(cat)}
                                                            onChange={handleCategoryInMixtoOnChange} />
                                                        <label className="form-check-label" htmlFor={`mixCategory${i}`}>{cat}</label>
                                                    </div>
                                                )
                                            })}
                                            <div className="create-new-category">
                                                <div className="btn btn-sm btn-primary" onClick={handleShowMixtoModal}>+ Categoría</div>
                                            </div>
                                            <Modal show={showMixtoModal} onHide={handleCloseMixtoModal}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Crear Categoría: Mixto</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label htmlFor="desdeHandicap">Desde: </label>
                                                                <input type="number" className="form-control" onChange={(e) => setNewCategoryFrom(e.target.value)} />
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label htmlFor="hastaHandicap">Hasta: </label>
                                                                <input type="number" className="form-control" onChange={(e) => setNewCategoryTo(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-secondary" onClick={handleCloseMixtoModal}>
                                                        Cancelar
                                                            </button>
                                                    <button className="btn btn-primary" onClick={handleAddMixtoCategory}>
                                                        Crear Categoría
                                                            </button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreatePart1;