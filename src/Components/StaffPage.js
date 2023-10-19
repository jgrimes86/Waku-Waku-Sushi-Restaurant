import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ReservationList from "./ReservationList"
import TableChart from "./TableChart";


function StaffPage() {
    const {reservations, handleChangeReservation} = useOutletContext();
    const [selectedReservation, setSelectedReservation] = useState({})
    
    function clickOnReservation(reservation) {
        setSelectedReservation(reservation)
    }

    return (
        <div id="manage-reservations">
            <h2 >Manage Reservations</h2>
            <div id="reservation-display">
                <ReservationList reservations={reservations} clickOnReservation={clickOnReservation} selectedReservation={selectedReservation} handleChangeReservation={handleChangeReservation} />
                <TableChart reservations={reservations} selectedReservation={selectedReservation}  />
            </div>
        </div>
    )
}

export default StaffPage;