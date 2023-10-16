import { useEffect, useState } from "react";
import ReservationList from "./ReservationList"
import Tables from "./Tables";

function StaffPage({reservations}) {
    const [resMessage, setResMessage] = useState("All Reservations:");
    const [dayAndTime, setDayAndTime] = useState({
        day: "",
        time: ""
    });
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
    }, [dayAndTime])

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

    return (
        <div>
            <ReservationList reservations={filteredReservations} changeDayAndTime={changeDayAndTime} resMessage={resMessage} />
            <Tables reservations={filteredReservations} dayAndTime={dayAndTime} />
        </div>
    )
}

export default StaffPage;