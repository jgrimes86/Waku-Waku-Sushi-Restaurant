import { MdTableRestaurant } from "react-icons/md";

function Table({table, filteredReservations, selectedReservation, dayAndTime}) {
    const {number, seats} = table;

    const isReserved = filteredReservations.find(res => res.table == number)

    const reservedClass = isReserved ? "reserved-table" : null;
    const selectedClass = (selectedReservation === isReserved) ? "selected-table" : null;

    return (
        <div id="table" className={selectedClass ? selectedClass : reservedClass} key={number}>
            <p>Table {number}</p>
            {isReserved ? <p>{isReserved.name}</p> : <p></p>}
            <MdTableRestaurant />
            <p>Seats {seats}</p>
        </div>
    )
}

export default Table;