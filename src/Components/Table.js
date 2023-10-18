import { MdTableRestaurant } from "react-icons/md";

function Table({table, reservations, selectedReservation, dayAndTime}) {
    const {number, seats} = table;
    const {day, time} = dayAndTime

    // If day and time selected, find reservation matching table ID
    const reservation = (day && time) ? reservations.find(res => res.table === number) : null;

    // Table CSS based on whether table is reserved or selected by staff
    const reservedClass = reservation ? "reserved-table" : null;
    const selectedClass = (selectedReservation === reservation) ? "selected-table" : null;

    function handleTableClick() {
        const currentTable = selectedReservation.table;
        const newTable = number
        console.log(currentTable, newTable)
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