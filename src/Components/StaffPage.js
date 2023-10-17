import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ReservationList from "./ReservationList"
import TableChart from "./TableChart";

const dayAndTimeStart = {
    day: "",
    time: ""
}

function StaffPage() {
    const {reservations} = useOutletContext();
    const [resMessage, setResMessage] = useState("All Reservations:");
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

    // Change text above reservation list based on day and time selected
    useEffect(() => {
        if (day && time) {
            setResMessage(`Reservations for ${day} at ${time}:`)
        } else if (day || time) {
            setResMessage (`Reservations for ${dayAndTime?.day + dayAndTime?.time}:`)
        } else {
            setResMessage('All Reservations:')
        }
    }, [dayAndTime])

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
            <h3 >Manage Reservations</h3>
            <div id="reservation-display">
                <ReservationList reservations={filteredReservations} changeDayAndTime={changeDayAndTime} resMessage={resMessage} clickOnReservation={clickOnReservation} />
                <TableChart reservations={filteredReservations} dayAndTime={dayAndTime} selectedReservation={selectedReservation} />
            </div>
        </div>
    )
}

export default StaffPage;