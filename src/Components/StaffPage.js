import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ReservationList from "./ReservationList"
import TableChart from "./TableChart";

const dayAndTimeStart = {
    day: "",
    time: ""
}

function StaffPage() {
    const {reservations, handleChangeReservation} = useOutletContext();
    const [dayAndTime, setDayAndTime] = useState(dayAndTimeStart);
    const {day, time} = dayAndTime;
    const [filteredReservations, setFilteredReservations] = useState([]);
    const [selectedReservation, setSelectedReservation] = useState({})
    
    // Filter reservations if day and time have been selected
    useEffect(() => {
        const filteredByDay = reservations.filter(res => {
            if (day === "") return res
            else if (res.date === day.toLowerCase()) return res
        }) 
        const filteredByTime = filteredByDay.filter(res => {
            if (time === "") return res
            else if (res.time === time) return res
        })
        setFilteredReservations(filteredByTime)
    }, [reservations, dayAndTime])

    function changeDayAndTime(name, value) {
        setDayAndTime({
            ...dayAndTime,
            [name]: value
        });
    }

    function clickOnReservation(reservation) {
        setSelectedReservation(reservation)
    }

    return (
        <div id="manage-reservations">
            <h2 >Manage Reservations</h2>
            <div id="reservation-display">
                <ReservationList reservations={reservations} clickOnReservation={clickOnReservation} selectedReservation={selectedReservation} handleChangeReservation={handleChangeReservation} />
                <TableChart reservations={filteredReservations} dayAndTime={dayAndTime} selectedReservation={selectedReservation} changeDayAndTime={changeDayAndTime} />
            </div>
        </div>
    )
}

export default StaffPage;