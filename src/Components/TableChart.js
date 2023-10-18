import Table from "./Table";
import tables from "../data/tableData";

function TableChart({reservations, dayAndTime, selectedReservation, changeDayAndTime}) {

    const tableList = tables.map(table => (
        <Table key={table.number} table={table} reservations={reservations} selectedReservation={selectedReservation} dayAndTime={dayAndTime} />
    ))

    function handleChange(event) {
        changeDayAndTime(event.target.name, event.target.value)
    }

    return (
        <div id="table-section">
            <h4>Select Date and Time to View Reserved Tables:</h4>
            <div>
                <div className="table-form">
                    <label htmlFor="day">Select a Day:</label>
                    <select className="dropdown" name="day" id="day-select" onChange={handleChange}>
                        <option value=""></option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                </div>
                <div className="table-form">
                    <label htmlFor="time">Select a Time:</label>
                    <select className="dropdown" name="time" id="time-select" onChange={handleChange}>
                        <option value=""></option>
                        <option value="7:30">7:30</option>
                        <option value="9:00">9:00</option>
                    </select>
                </div>
            </div>
            <div id="table-chart">
                {tableList}
            </div>
        </div>
    )
}

export default TableChart;