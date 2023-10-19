import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import EditRes from "./EditRes";

const defaultResForm = {
    id: "",
    name: "",
    phoneNumber: "",
    guests: "",
    date: "",
    table: "",
    time: "",
}

function ReservationItem({res, clickOnReservation, selectedReservation}) {
    const {id, name, phoneNumber, date, time, guests, table} = res;
    const [editResForm, setEditResForm] = useState(defaultResForm)

    const {handleChangeReservation, handleReservationDelete, friRez, satRez, setFriRez, setSatRez} = useOutletContext()
    
    function handleClick() {
        clickOnReservation(res)
    }

    function handleChange(event) {
        setEditResForm({
            ...editResForm,
            [event.target.name]: event.target.value
        })
    }

    // used in handleSubmit and deleteReservation
    const originalTableDB = (date === "Friday") ? friRez : satRez;
    const originalTableDBUpdate = (date === "Friday") ? setFriRez : setSatRez;
    const originalSeating = (time === "7:30" ? "1930-seating" : "2100-seating");

    function handleSubmit(event) {
        event.preventDefault();
        let changedReservation = {...editResForm}
        for (let key in changedReservation) {
            if (!changedReservation[key]) {
                changedReservation[key] = res[key]
            }
        }
        if (changedReservation.table !== table) {
            const newTableDb = (changedReservation.date === "Friday") ? friRez : satRez;
            const newTableDBUpdate = (changedReservation.date === "Friday") ? setFriRez : setSatRez;
            const newSeating = (changedReservation.time === "7:30" ? "1930-seating" : "2100-seating");
            // update current table
            fetch(`http://localhost:3001/${date}_tables/${table}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({[originalSeating]: true})
            })
            .then(resp => resp.json())
            .then(oldTable => {
                originalTableDBUpdate(() => originalTableDB.map(table => {
                    if(table.id === oldTable.id) {
                        return oldTable
                    } else return table
                }));
                // update new table
                fetch(`http://localhost:3001/${changedReservation.date}_tables/${changedReservation.table}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({[newSeating]: false})
                })
                .then(resp => resp.json())
                .then(newTable => newTableDBUpdate(() => newTableDb.map(table => {
                    if(table.id === newTable.id) {
                        return newTable
                    } else return table
                })))
            })
        }
        // update reservation
        fetch(`http://localhost:3001/reservations/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(changedReservation)
        })
        .then(resp => resp.json())
        .then(updatedRes => {
            handleChangeReservation(updatedRes);
            setEditResForm(defaultResForm)
        })
    }

    function clearFormContent() {
        setEditResForm(defaultResForm)
    }

    function deleteReservation() {
        fetch(`http://localhost:3001/reservations/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            fetch(`http://localhost:3001/${date}_tables/${table}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({[originalSeating]: true})
            })
            .then(resp => resp.json())
            .then(revisedTable => {
                originalTableDBUpdate(() => originalTableDB.map(table => {
                    if(table.id === revisedTable.id) {
                        return revisedTable
                    } else return table
                }))
            });
        })
        handleReservationDelete(id);
    }

    const itemClass = (selectedReservation.id === id) ? "reservationItem selected-res" : "reservationItem";

    return (
        <li className={itemClass} id={name+table} onClick={handleClick} >
            <div>
                <p>{name} ({phoneNumber})</p>
                <p>Day and time: {date}, {time}</p>
                <p>Number of Guests: {guests}</p>
                <p>Table: {table}</p>
            </div>
            {(selectedReservation.id === id) ?
                <EditRes
                    editResForm={editResForm}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    clearFormContent={clearFormContent}
                    deleteReservation={deleteReservation}
                /> : 
                null
            }
        </li>
    )
}

export default ReservationItem;