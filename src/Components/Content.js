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

    const context = {
        reservations, 
        friRez, 
        satRez, 
        onNewRez, 
        setFriRez,
        setSatRez
    }

    function onNewRez(newRez) {
        setReservations(newRez)
    }

    console.log("satRez" , satRez)

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