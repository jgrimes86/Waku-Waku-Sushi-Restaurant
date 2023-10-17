import { useState, useEffect } from "react";
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

    return (
        <div>
            <Menu />
            <ReservationForm 
                reservations={reservations}
                friRez={friRez}
                satRez={satRez}
            />
            <Login />
            <StaffPage reservations={reservations} />
        </div>
    )
}

export default Content;