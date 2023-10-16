import { MdTableRestaurant } from "react-icons/md";

function Tables({reservations, dayAndTime}) {
    const {day, time} = dayAndTime
    
    const tables = [
        {
            number: "1",
            seats: "4"
        },
        {
            number: "2",
            seats: "4"
        },
        {
            number: "3",
            seats: "4"
        },
        {
            number: "4",
            seats: "2"
        },
        {
            number: "5",
            seats: "2"
        },
        {
            number: "6",
            seats: "2"
        }
    ]

    const tableList = tables.map(table => {
        const tableId = table.number;
        const reservation = reservations.find(res => res.table === tableId)
        return (
            <div id="table" key={table.number}>
                <p>Table {table.number}</p>
                {reservation ? <p>{reservation.name}</p> : null}
                <MdTableRestaurant />
                <p>Seats {table.seats}</p>
            </div>
        )
    })

    return (
        <div id="table-chart">
            {tableList}
        </div>
    )
}

export default Tables;