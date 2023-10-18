import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
// import Input from "react-phone-input-2"
// import PhoneInput from "react-phone-input-2"
// import "react-phone-input-2/lib/style.css"

const initialState = {
    name: "",
    phoneNumber: "", 
    guests: "",
    date: "",
    time: "",
    table: ""
}

function ReservationForm() {
    const {reservations, friRez, satRez, onNewRez, setFriRez, setSatRez} = useOutletContext();
    
    const [rezFormData, setRezFormData] = useState(initialState)  
    const {name, phoneNumber, guests, date, time} = rezFormData

    const [is1930Open, setIs1930Open] = useState(false)
    const [is2100Open, setIs2100Open] = useState(false)
    const [filteredSlots, setFilteredSlots] = useState({})

    let btn1930 = is1930Open ? 
        <button onClick={handleChange} type="button" name="time" value="7:30">7:30PM</button> : null
    let btn2100 = is2100Open  ? 
        <button onClick={handleChange} type="button" name="time" value="9:00">9:00PM</button> : null

    function handleChange(event) {
        setRezFormData(currentData => {
            return {
                ...currentData,
                [event.target.name]: event.target.value
            }
        })

        setIs1930Open(false)
        setIs2100Open(false)
    }

    function handleSubmit(event) {
        event.preventDefault();

        let day = rezFormData.date 
        let time = rezFormData.time === "7:30" ? "1930-seating" : "2100-seating";
        
        const tableOpen = filteredSlots.find((table) => {
            if (table[time] === true) return table
        })

        const tableId = tableOpen.id

        console.log("Tableopen", tableOpen)
        console.log("Table: ", tableId)

        // update (patch) rez-table to false
        fetch(`http://localhost:3001/${rezFormData.date}_tables/${tableId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({[time]: false})
        })
             .then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw Error("reservation table not set")
                }
            })
            .then(rez => {
                    console.log(rez)
                }      
            )
            
        
        
        // add new res to db
        fetch("http://localhost:3001/reservations", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...rezFormData,
                "table": tableId
            })

        })
            .then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw Error("New reservation not made")
                }
            })
            .then(rez => {
                onNewRez(rez)
                setRezFormData(initialState)
                // setIs1930Open(false)
                // setIs2100Open(false)
            })
        setRezFormData(initialState)
        setFilteredSlots("")
        setIs1930Open(false)
        setIs2100Open(false)
    }

    function updateOpenTable(db) {
        let filtered = db.filter((res) => {
            if (res["1930-seating"] || res["2100-seating"]) {
                if (res["1930-seating"]) {
                    setIs1930Open(true) 
                } 
                if (res["2100-seating"]){ 
                    setIs2100Open(true)
                }
                return res
            } 
            else {
                console.log(`table ${res.id} is booked for the day`)
            }
        })
        setFilteredSlots(filtered)
    }

    useEffect(() => {
        let day = rezFormData.date
        let guest = rezFormData.guests

        if (day && guest) {
            let db = day === "friday" ? friRez : satRez;

            const filterbyGuestAmt = db.filter((res) => {
                if (guest <= res.seats) return res
            })

            updateOpenTable(filterbyGuestAmt)

        } else if (day || guest) {
            let db

            if (day) {
                if (day === "friday") {
                    db = friRez
                } else {
                    db = satRez
                }

                updateOpenTable(db)
            } 
        }
        
    }, [rezFormData])

    // console.log("730pm", is1930Open)
    // console.log("9pm", is2100Open)
    // console.log("filteredSlots", filteredSlots)
    // console.log("rezFormData", rezFormData)

    return (
        <div className="reservation">
            <h2>Make A Reservation</h2>
            <form className="reservation-form">
                {/* date */}
                <label htmlFor="date">Date  </label>
                <select 
                    name="date" 
                    onChange={handleChange}
                    value={rezFormData.date} 
                >
                    <option value="" disabled>-----</option>
                    <option value="friday">Fri, Oct 20</option>
                    <option value="saturday">Sat, Oct 21</option>
                </select>

                {/* guests */}
                <label htmlFor="guests">Number of Guests  </label>
                <select 
                    name="guests" 
                    value={rezFormData.guests}
                    onChange={handleChange} 
                > 
                    <option value="" disabled>-----</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                </select>

                {/* name */}
                <label htmlFor="name">Name  </label>
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />

                {/* phone number */}
                <label htmlFor="phoneNumber">Phone Number  </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="(xxx) - xxx - xxxx"
                    maxLength="10"
                    value={phoneNumber}
                    onChange={handleChange}
                    required
                />
                {btn1930}
                {btn2100}
            </form>
            <button onClick={handleSubmit} type="submit">Make A Reservation</button>
        </div>
    )
}

export default ReservationForm;