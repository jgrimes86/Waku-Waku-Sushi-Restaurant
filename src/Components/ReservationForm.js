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
    
    const {reservations, friRez, satRez} = useOutletContext();
    
    const [rezFormData, setRezFormData] = useState(initialState)    
    const [is1930Open, setIs1930Open] = useState(false)
    const [is2100Open, setIs2100Open] = useState(false)

    const [filteredSlots, setFilteredSlots] = useState({})

    const {name, phoneNumber, guests, date, time} = rezFormData

    function handleChange(event) {
        setRezFormData(currentData => {
            return {
                ...currentData,
                [event.target.name]: event.target.value
            }
        })
    }

     useEffect(() => {
        let day = rezFormData.date
        let db = day === "friday" ? friRez : satRez;

        console.log(db)
        
        const filterByGuests = db.filter(res => {
            if (rezFormData.guests <= res.seats) return res;
        })

        const filterByTable = filterByGuests.filter(res => {
            if (res["1930-seating"]) {
                setIs1930Open(true)
                return res
            }   else { 
                setIs2100Open(true)
                return res
            }
        })
        
        console.log(filterByTable)
        setFilteredSlots(filterByTable)
    }, [rezFormData])

    console.log(filteredSlots)
    const btn1930 = is1930Open ? 
        <button>7:30PM</button> 
        : 
        null
    const btn2100 = is2100Open ? 
        <button>9:00PM</button> 
        : 
        null

    return (
        <div className="reservation">
            <h2>Make A Reservation</h2>
            <form className="reservation-form">
                {/* date */}
                <label htmlFor="date">Date  </label>
                <select 
                    name="date" 
                    defaultValue="default"
                    onChange={handleChange} 
                >
                    <option value="default" disabled hidden>-----</option>
                    <option value="friday">Fri, Oct 20</option>
                    <option value="saturday">Sat, Oct 21</option>
                </select>

                {/* guests */}
                <label htmlFor="guests">Number of Guests  </label>
                <select 
                    name="guests" 
                    defaultValue="default"
                    onChange={handleChange} 
                > 
                    <option value="default" disabled hidden>-----</option>
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
            </form>
            {/* {is1930Btn}
            {is2100Btn} */}
            {btn1930}
            {btn2100}
            <button type="submit">Make A Reservation</button>
        </div>
    )
}

export default ReservationForm;