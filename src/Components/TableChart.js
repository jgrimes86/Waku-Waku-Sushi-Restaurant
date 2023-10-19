import { useState } from "react";
import Table from "./Table";
import tables from "../data/tableData";

const dayAndTimeStart = {
    day: "",
    time: ""
}

function TableChart({reservations, selectedReservation}) {
    const [dayAndTime, setDayAndTime] = useState(dayAndTimeStart);
    
    function handleChange(event) {
        setDayAndTime({
            ...dayAndTime,
            [event.target.name]: event.target.value
        })
    }

    const filteredReservations = reservations.filter(res => {
        if ((res.date === dayAndTime.day) && (res.time === dayAndTime.time)) {
            return res
        }
    })

    const tableList = tables.map(table => (
        <Table key={table.number} table={table} filteredReservations={filteredReservations} selectedReservation={selectedReservation} dayAndTime={dayAndTime} />
    ))

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