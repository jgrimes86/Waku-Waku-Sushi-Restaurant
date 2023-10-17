import { useState } from "react";
// import Input from "react-phone-input-2"
import PhoneInput from "react-phone-input-2"
// import "react-phone-input-2/lib/style.css"

const initialState = {
    name: "",
    phoneNumber: "", 
    guests: "",
    date: "",
    time: "",
    table: ""
}

function Reservation({ reservations }) {

    const [rezFormData, setRezFormData] = useState(initialState)
    const {name, phoneNumber, guests, date, time} = rezFormData
    
    function handleChange(event) {
        setRezFormData(currentData => {
            return {
                ...currentData,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(rezFormData)


    return (
        <div className="reservation">
            <h2>Make A Reservation</h2>
            <form className="reservation-form">
                {/* date */}
                <label htmlFor="date">Date  </label>
                <select 
                    name="date" 
                    onChange={handleChange} 
                >
                    <option value="friday">Fri, Oct 20</option>
                    <option value="saturday">Sat, Oct 21</option>
                </select>

                {/* time */}
                <label htmlFor="date">Time </label>
                <select 
                    name="time" 
                    onChange={handleChange} 
                >
                    <option value="7:30">7:30 pm</option>
                    <option value="9:00">9:00 pm</option>
                </select>

                {/* guests */}
                <label htmlFor="guests">Number of Guests  </label>
                <select 
                    name="guests" 
                    onChange={handleChange} 
                > 
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

            <button type="submit">Make A Reservation</button>
        </div>
    )
}

export default Reservation;