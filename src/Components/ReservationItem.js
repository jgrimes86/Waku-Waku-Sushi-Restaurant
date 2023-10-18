import { useState } from "react";

const defaultResForm = {
    date: "",
    guests: "",
    id: "",
    name: "",
    phoneNumber: "",
    table: "",
    time: ""
}

function ReservationItem({res, clickOnReservation, selectedReservation, handleChangeReservation}) {
    const {id, name, phoneNumber, date, time, guests, table} = res;
    const [editResForm, setEditResForm] = useState(defaultResForm)

    // console.log("reservation form: ", editResForm)
    
    function handleClick() {
        clickOnReservation(res)
    }

    function handleChange(event) {
        setEditResForm({
            ...editResForm,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("clicked")
        let changedReservation = {...editResForm}
        for (let key in changedReservation) {
            if (!changedReservation[key]) {
                changedReservation[key] = selectedReservation[key]
            }
        }
        fetch(`http://localhost:3001/reservations/${changedReservation.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(changedReservation)
        })
        handleChangeReservation(changedReservation)
    }

    const reservationChange = () => {
        return (
            <form onSubmit={handleSubmit}>
                <p>{name}</p>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input name="phoneNumber" type="text" value={editResForm.phoneNumber} onChange={handleChange}/>
                <label htmlFor="date">Day: </label>
                <select className="dropdown" name="date" value={editResForm.date} onChange={handleChange}>
                    <option value=""></option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                </select>
                <br />
                <label htmlFor="time">Time: </label>
                <select className="dropdown" name="time" value={editResForm.time} onChange={handleChange}>
                    <option value=""></option>
                    <option value="7:30">7:30</option>
                    <option value="9:00">9:00</option>
                </select>
                <br />
                <label htmlFor="guests">Guests: </label>
                <select className="dropdown" name="guests" value={editResForm.guests} onChange={handleChange}>
                    <option value=""></option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <label htmlFor="table">Table: </label>
                <select className="dropdown" name="table" value={editResForm.table} onChange={handleChange}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <br/>
                <input type="submit" value="Change Reservation" />
                <br/>
                {/* <button >Clear Changes</button> */}
            </form>
        )
    }

    return (
        <li className="reservationItem" id={name+table} onClick={handleClick} >
            <div>
                <p>{name} ({phoneNumber})</p>
                <p>Day and time: {date}, {time}</p>
                <p>Number of Guests: {guests}</p>
            </div>
            {(selectedReservation.id === id) ? reservationChange() : null}
        </li>
    )
}

export default ReservationItem;