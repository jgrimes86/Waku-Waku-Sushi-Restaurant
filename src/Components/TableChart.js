import Table from "./Table";
import tables from "../data/tableData";

function TableChart({reservations, dayAndTime, selectedReservation}) {

    const tableList = tables.map(table => (
        <Table key={table.number} table={table} reservations={reservations} selectedReservation={selectedReservation} dayAndTime={dayAndTime} />
    ))

    return (
        <div id="reserved-tables">
            <h4>Select Date and Time to View Reserved Tables:</h4>
            <div id="table-chart">
                {tableList}
            </div>
        </div>
    )
}

export default TableChart;