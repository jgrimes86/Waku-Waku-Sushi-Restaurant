import { useState, useEffect } from "react";
import StaffPage from "./StaffPage";
import Menu from "./Menu";
import Reservation from "./Reservation";
import Login from "./Login";

import { useState, useEffect } from "react";

function Content() {
    const [reservations, setReservations] = useState([]);
    const databaseURL = "http://localhost:3001"

    useEffect(() => {
        fetch(databaseURL+"/reservations")
        .then(resp => resp.json())
        .then(setReservations)
    }, [])

    // console.log(reservations)

    return (
        <div>
            <StaffPage reservations={reservations} />
            <Menu />
            <Reservation />
            <Login />
            
        </div>
    )
}

export default Content;