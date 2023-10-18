import ReservationItem from "./ReservationItem"

function ReservationList({reservations, changeDayAndTime, resMessage, clickOnReservation, selectedReservation, handleChangeReservation}) {

    const reservationList = reservations.map(res => {
        return <ReservationItem key={res.id} res={res} clickOnReservation={clickOnReservation} selectedReservation={selectedReservation} handleChangeReservation={handleChangeReservation} />;
})

    function handleChange(event) {
        changeDayAndTime(event.target.name, event.target.value)
    }

    return (
        <div id="reservation-filter" >
            <div>
                <label htmlFor="day">Select a Day:</label>
                <select className="dropdown" name="day" id="day-select" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
                <br />
                <label htmlFor="time">Select a Time:</label>
                <select className="dropdown" name="time" id="time-select" onChange={handleChange}>
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