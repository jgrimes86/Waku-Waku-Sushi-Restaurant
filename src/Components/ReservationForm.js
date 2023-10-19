import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const initialState = {
    name: "",
    phoneNumber: "", 
    guests: "",
    date: "",
    time: "",
    table: ""
}

function ReservationForm() {

    const {
        friRez, 
        satRez, 
        onNewRez, 
        onFriTableUpdate,
        onSatTableUpdate,
        setActiveRez
    } = useOutletContext();

    const navigate = useNavigate(); 
    
    const [rezFormData, setRezFormData] = useState(initialState)  
    const {name, phoneNumber} = rezFormData

    const [is1930Open, setIs1930Open] = useState(false)
    const [is2100Open, setIs2100Open] = useState(false)
    const [filteredSlots, setFilteredSlots] = useState({})
    const [isSelected, setIsSelected] = useState("")

    const classFor730 = (isSelected === "7:30") ? "selected-time" : "";
    const classFor900 = (isSelected === "9:00") ? "selected-time" : "";

    let btn1930 = is1930Open ? 
        <button onClick={handleChange} type="button" name="time" value="7:30" className={classFor730}>7:30PM</button> : null
    let btn2100 = is2100Open  ? 
        <button onClick={handleChange} type="button" name="time" value="9:00" className={classFor900}>9:00PM</button> : null

    function handleChange(event) {
        setRezFormData(currentData => {
            return {
                ...currentData,
                [event.target.name]: event.target.value
            }
        })
        setIs1930Open(false)
        setIs2100Open(false)
        setIsSelected(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        let day = rezFormData.date 
        let time = rezFormData.time === "7:30" ? "1930-seating" : "2100-seating";
        
        const tableOpen = filteredSlots.find((table) => {
            if (table[time] === true) return table
        })

        const tableId = tableOpen.id

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
                if (day === "Friday") {
                    onFriTableUpdate(rez)
                } else if (day === "Saturday") {
                    onSatTableUpdate(rez)
                }                
            })
        
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
                setActiveRez(rez)
            })
        setRezFormData(initialState)
        setFilteredSlots("")
        setIs1930Open(false)
        setIs2100Open(false)
        navigate("/reservation-success");
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
                // console.log(`table ${res.id} is booked for the day`)
            }
        })
        setFilteredSlots(filtered)
    }

    useEffect(() => {
        let day = rezFormData.date
        let guest = rezFormData.guests

        if (day && guest) {
            let db = day === "Friday" ? friRez : satRez;
            const filterbyGuestAmt = db.filter((res) => {
                if (guest <= res.seats) return res
            })
            updateOpenTable(filterbyGuestAmt)
        } else if (day || guest) {
            let db
            if (day) {
                if (day === "Friday") {
                    db = friRez
                } else {
                    db = satRez
                }
                updateOpenTable(db)
            } 
        }
    }, [rezFormData])

    return (
        <div className="reservation">
            <h2>Make A Reservation</h2>
            <form className="reservation-form">

                <div id="form-select">
                    {/* date */}
                    <label htmlFor="date">Date  </label>
                    <select name="date" onChange={handleChange} value={rezFormData.date}>
                        <option value="" disabled>-----</option>
                        <option value="Friday">Fri, Oct 20</option>
                        <option value="Saturday">Sat, Oct 21</option>
                    </select>

                    {/* guests */}
                    <label htmlFor="guests">Number of Guests  </label>
                    <select name="guests" value={rezFormData.guests} onChange={handleChange}> 
                        <option value="" disabled>-----</option>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                    </select>
                </div>
                
                <div id="form-input">
                    <label htmlFor="name">Name  </label>
                    <input type="text" name="name" value={name} onChange={handleChange}/>

                    <label htmlFor="phoneNumber">Phone Number  </label>
                    <input type="tel" name="phoneNumber" placeholder="(xxx) - xxx - xxxx" maxLength="10" value={phoneNumber} onChange={handleChange}/>
                </div>

                <div id="form-btns">
                    {btn1930}
                    {btn2100}
                </div>

                <button onClick={handleSubmit} type="submit">Make A Reservation</button>
            </form>
            
        </div>
    )
}
export default ReservationForm;