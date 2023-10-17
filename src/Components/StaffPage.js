import { useEffect, useState } from "react";
import ReservationList from "./ReservationList"
import TableChart from "./TableChart";

const dayAndTimeStart = {
    day: "",
    time: ""
}

function StaffPage({reservations}) {
    const [resMessage, setResMessage] = useState("All Reservations:");
    const [dayAndTime, setDayAndTime] = useState(dayAndTimeStart);
    const {day, time} = dayAndTime;
    const [filteredReservations, setFilteredReservations] = useState([]);
    const [selectedReservation, setSelectedReservation] = useState({})

    useEffect(() => {
        const filteredByDay = reservations.filter(res => {
            if (day === "") return res
            else if (res.day === day.toLowerCase()) return res
        }) 
        const filteredByTime = filteredByDay.filter(res => {
            if (time === "") return res
            else if (res.time === time) return res
        })
        setFilteredReservations(filteredByTime)
    }, [reservations, dayAndTime])

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

    console.log(selectedReservation)

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