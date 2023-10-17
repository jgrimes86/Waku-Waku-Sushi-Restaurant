import { useState, useEffect } from "react";
import StaffPage from "./StaffPage";
import Menu from "./Menu";
import Reservation from "./Reservation";
import Login from "./Login";

function Content() {
    const [reservations, setReservations] = useState([]);
    const databaseURL = "http://localhost:3001"

    useEffect(() => {
        fetch(databaseURL+"/reservations")
        .then(resp => resp.json())
        .then(setReservations)
    }, [])

    return (
        <div>
            <Menu />
            <Reservation reservations={reservations}/>
            <Login />
            <StaffPage reservations={reservations} />
        </div>
    )
}

export default Content;