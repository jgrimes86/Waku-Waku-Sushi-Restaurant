
function ReservationItem({res, clickOnReservation}) {
    const {name, phoneNumber, date, time, table} = res;

    function handleClick() {
        clickOnReservation(res)
    }

    return (
        <li className="reservationItem" onClick={handleClick} >
            <p>{name} ({phoneNumber})</p>
            <p>Day and time: {date}, {time}</p>
            {/* <p>Table: {table}</p> */}
        </li>
    )
}

export default ReservationItem;