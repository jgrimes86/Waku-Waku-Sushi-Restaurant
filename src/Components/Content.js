import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import StaffPage from "./StaffPage";
import Menu from "./Menu";
import ReservationForm from "./ReservationForm";
import Login from "./Login";

function Content() {
    const [reservations, setReservations] = useState([]);
    const [friRez, setFriRez] = useState([])
    const [satRez, setSatRez] = useState ([])

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
    }

    function onNewRez(newRez) {
        setReservations(newRez)
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
    // console.log("satRez" , satRez)

    // console.log(reservations)

    return (
        <div>
            <Outlet context={context} />
            {/* <Menu />
            <Reservation reservations={reservations}/>
            <Login /> */}
            {/* <StaffPage reservations={reservations} /> */}
        </div>
    )
}

export default Content;