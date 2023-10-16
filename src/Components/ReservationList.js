
function ReservationList({reservations, changeDayAndTime, resMessage}) {

    const reservationList = reservations.map(res => {
        return (
            <li key={res.id} >
                {res.name} 
                {res.phone_number} 
                {res.day} 
                {res.table} 
                {res.time}
            </li>
        )
    })

    function handleChange(event) {
        changeDayAndTime(event.target.name, event.target.value)
    }

    return (
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
    )
}

export default ReservationList;