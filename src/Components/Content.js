import Menu from "./Menu";
import Reservation from "./Reservation";
import Login from "./Login";
import ManageReservations from "./ManageReservations";

import { useState, useEffect } from "react";

function Content() {
    const [reservations, setReservations] = useState([]);
    const databaseURL = "http://localhost:3001"

    useEffect(() => {
        fetch(databaseURL+"/reservations")
        .then(resp => resp.json())
        .then(setReservations)
    }, [])

    console.log(reservations)

    return (
        <div>
            <Menu />
            <Reservation reservations={reservations}/>
            <Login />

            <ManageReservations reservations={reservations} />
        </div>
    )
}

export default Content;