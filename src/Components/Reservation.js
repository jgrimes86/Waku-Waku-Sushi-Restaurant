function Reservation() {
    return (
        <div className="reservation">
            <h2>Make A Reservation</h2>
            <form className="reservation-form">
                <label for="date">Date  </label>
                <select name="date">
                    <option value="friday">Fri, Oct 20</option>
                    <option value="saturday">Sat, Oct 21</option>
                </select>

                <label for="date">Time </label>
                <select name="time">
                    <option value="1930">7:30 pm</option>
                    <option value="2100">9:00 pm</option>
                </select>

                <label for="guests">Number of Guests  </label>
                <select name="guests">
                    <option value="two-people">2 people</option>
                    <option value="three-people">3 people</option>
                    <option value="four-people">4 people</option>
                    <option value="five-people">5 people</option>
                    <option value="six-people">6 people</option>
                </select>

                <label for="name">Name  </label>
                <input type="text" required/>
                <label for="number">Phone Number  </label>
                <input type="text" required/>

                <input type="submit" value="Make a Reservation"/>
            </form>
        </div>
    )
}

export default Reservation;