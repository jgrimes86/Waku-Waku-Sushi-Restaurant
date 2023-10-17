import ReservationItem from "./ReservationItem"

function ReservationList({reservations, changeDayAndTime, resMessage, clickOnReservation}) {

    const reservationList = reservations.map(res => (
        <ReservationItem key={res.id} res={res} clickOnReservation={clickOnReservation} />
    ))

    function handleChange(event) {
        changeDayAndTime(event.target.name, event.target.value)
    }

    return (
        <div id="reservation-filter" >
            <div>
                <label htmlFor="day">Select a Day:</label>
                <select name="day" id="day-select" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
                <br />
                <label htmlFor="time">Select a Time:</label>
                <select name="time" id="time-select" onChange={handleChange}>
                    <option value=""></option>
                    <option value="7:30">7:30</option>
                    <option value="9:00">9:00</option>
                </select>
            </div>
            <div id="reservation-selection">
                <h4>{resMessage}</h4>
                <ul id="reservation-list">
                    {reservationList}
                </ul>
            </div>
        </div>
    )
}

export default ReservationList;