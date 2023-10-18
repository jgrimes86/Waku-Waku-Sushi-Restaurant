import { useOutletContext} from "react-router-dom";
import { BsPeopleFill, BsCalendar3Event } from "react-icons/bs";
import { ImClock } from "react-icons/im";

function ReservationComplete() {

    const { activeRez } = useOutletContext();

    return (
        <div>
            <h2>SUCCESS!</h2>
            <h2>Your Reservation is set! </h2>
            <p>We look forward to seeing you!</p>
            <p className="res-name">{activeRez.name}</p>
            <p><BsCalendar3Event /> {activeRez.date}</p>
            <p><BsPeopleFill /> {activeRez.guests} guests</p>
            <p><ImClock /> {activeRez.time}PM</p>
        </div>
    )
}

export default ReservationComplete;