import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Content({ toggleLogin }) {

    useEffect(() => {
        console.log("content useEffect", toggleLogin)
    }, [])

    const [reservations, setReservations] = useState([]);
    const [friRez, setFriRez] = useState([])
    const [satRez, setSatRez] = useState ([])
    const [activeRez, setActiveRez] = useState({})
    

    const databaseURL = "http://localhost:3001"

    useEffect(() => {
        fetch(databaseURL+"/reservations")
        .then(resp => resp.json())
        .then(setReservations)

        fetch(databaseURL+"/friday_tables")
        .then(resp => resp.json())
        .then(setFriRez)

        fetch(databaseURL+"/saturday_tables")
        .then(resp => resp.json())
        .then(setSatRez)
    }, [])

    function handleChangeReservation(changedReservation) {
        setReservations(reservations => reservations.map(res => {
            if (res.id === changedReservation.id) {
                return changedReservation
            } else return res
        }))
    }

    const context = {
        reservations, 
        friRez, 
        satRez, 
        onNewRez, 
        setFriRez,
        setSatRez,
        onFriTableUpdate,
        onSatTableUpdate,
        handleChangeReservation,
        activeRez,
        setActiveRez,
        toggleLogin
    }

    console.log("is this changing", toggleLogin)

    function onNewRez(newRez) {
        setReservations(currentRez => [...currentRez, newRez])
    }

    function onFriTableUpdate(updatedTable) {
        setFriRez(currentTables => currentTables.map(table => {
            if (table.id === updatedTable.id) {
                return updatedTable;
            } else {
                return table
            }
        }))
    }

    function onSatTableUpdate(updatedTable) {
        setSatRez(currentTables => currentTables.map(table => {
            if (table.id === updatedTable.id) {
                return updatedTable;
            } else {
                return table
            }
        }))
    }

    return (
        <div>
            <Outlet context={context} />
        </div>
    )
}

export default Content;