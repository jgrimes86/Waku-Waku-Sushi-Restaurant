
function ReservationItem({res, clickOnReservation}) {
    const {name, phone_number, day, time, table} = res;

    function handleClick() {
        clickOnReservation(res)
    }

    return (
        <li className="reservationItem" onClick={handleClick} >
            <p>{name} ({phone_number})</p>
            <p>Day and time: {day}, {time}</p>
            {/* <p>Table: {table}</p> */}
        </li>
    )
}

export default ReservationItem;