import { useState, useEffect } from "react";
import StaffPage from "./StaffPage";

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
        </div>
    )
}

export default Content;