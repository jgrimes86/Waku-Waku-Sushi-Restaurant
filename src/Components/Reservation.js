import { useState } from "react";

function Reservation() {

    const [friReserv, setFriReserv] = useState()

    return (
        <div className="reservation">
            <h2>Make A Reservation</h2>
            <form className="reservation-form">
                <label htmlFor="date">Date  </label>
                <select name="date">
                    <option value="friday">Fri, Oct 20</option>
                    <option value="saturday">Sat, Oct 21</option>
                </select>

                <label htmlFor="date">Time </label>
                <select name="time">
                    <option value="7:30">7:30 pm</option>
                    <option value="9:00">9:00 pm</option>
                </select>

                <label htmlFor="guests">Number of Guests  </label>
                <select name="guests">
                    <option value="two-people">2 people</option>
                    <option value="three-people">3 people</option>
                    <option value="four-people">4 people</option>
                </select>

                <label htmlFor="name">Name  </label>
                <input type="text" required/>
                <label htmlFor="number">Phone Number  </label>
                <input type="text" required/>

                <input type="submit" value="Make a Reservation"/>
            </form>
        </div>
    )
}

export default Reservation;