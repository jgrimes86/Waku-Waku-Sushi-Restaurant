import { useOutletContext} from "react-router-dom";
import { BsPeopleFill, BsCalendar3Event } from "react-icons/bs";
import { ImClock } from "react-icons/im";

function ReservationComplete() {

    const { activeRez } = useOutletContext();

    return (
        <>
            <h2>SUCCESS!</h2>
            <div id="res-success">
                <p>Your Reservation is set! We look forward to seeing you, {activeRez.name}!</p>
                <p><BsCalendar3Event /> {activeRez.date}</p>
                <p><BsPeopleFill /> {activeRez.guests} guests</p>
                <p><ImClock /> {activeRez.time}PM</p>
            </div>
            
        </>
    )
}

export default ReservationComplete;