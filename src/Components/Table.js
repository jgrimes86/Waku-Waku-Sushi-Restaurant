import { MdTableRestaurant } from "react-icons/md";

function Table({table, reservations, selectedReservation, dayAndTime}) {
    const {number, seats} = table;
    const {day, time} = dayAndTime

    const reservation = (day && time) ? reservations.find(res => res.table === number) : null;
    const reservedClass = reservation ? "reserved-table" : null;
    const selectedClass = (selectedReservation === reservation) ? "selected-table" : null;

    function handleTableClick() {
        const currentTable = selectedReservation.table;
        const newTable = number
        console.log(currentTable, newTable)
        // change "table" value in selectedReservation
        // change "table" value for reservation in filteredReservations
        // change "table" value in reservation database
        // change currentTable time slot to "true" in table database
        // change newTable time slot to "false" in table database
    }

    return (
        <div id="table" className={selectedClass ? selectedClass : reservedClass} key={number} onClick={handleTableClick}>
            <p>Table {number}</p>
            {reservation ? <p>{reservation.name}</p> : <p></p>}
            <MdTableRestaurant />
            <p>Seats {seats}</p>
        </div>
    )
}

export default Table;