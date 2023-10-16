import { useEffect, useState } from "react";
import { IconName } from "react-icons/md";

function ManageReservations({reservations}) {
    const [dayAndTime, setDayAndTime] = useState({
        day: "",
        time: ""
    });
    const {day, time} = dayAndTime;
    const [resMessage, setResMessage] = useState("All Reservations:")

    const filteredByDay = reservations.filter(res => {
        if (day === "") return res
        else if (res.day === day.toLowerCase()) return res
    })
        
    const filteredByTime = filteredByDay.filter(res => {
        if (time === "") return res
        else if (res.time === time) return res
    })

    const reservationList = filteredByTime.map(res => {
        return (
            <li key={res.id}>
                <span>{res.name} {res.phone_number} {res.day} {res.table} {res.time}</span>
            </li>
        )
    })

    useEffect(() => {
        if (day && time) {
            setResMessage(`Reservations for ${day} at ${time}:`)
        } else if (day || time) {
            setResMessage (`Reservations for ${dayAndTime?.day + dayAndTime?.time}:`)
        } else {
            setResMessage('All Reservations:')
        }
    }, [dayAndTime])

    function handleChange(event) {
        setDayAndTime({
            ...dayAndTime,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h2>Manage Reservations</h2>

            <div id="reservation-menu" >
                <label htmlFor="day">Select a Day:</label>
                <select name="day" id="day-select" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
                <label htmlFor="time">Select a Time:</label>
                <select name="time" id="time-select" onChange={handleChange}>
                    <option value=""></option>
                    <option value="7:30">7:30</option>
                    <option value="9:00">9:00</option>
                </select>
                <div id="reservation-selection">
                    <p>{resMessage}</p>
                </div>
                <ul id="reservation-list">
                    {reservationList}
                </ul>
            </div>

            <div id="table-chart">

            </div>

        </div>
    )
}

export default ManageReservations;