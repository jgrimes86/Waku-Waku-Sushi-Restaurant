import { useOutletContext} from "react-router-dom";
import { BsPeopleFill, BsCalendar3Event } from "react-icons/bs";
import { ImClock } from "react-icons/im";

function ReservationComplete() {

    const { activeRez } = useOutletContext();

    return (
        <div id="res-success">
            <h2>SUCCESS!</h2>
            <div id="res-info">
                <p id="res-name">Your Reservation is set! We look forward to seeing you, {activeRez.name}!</p>
                
                <p><BsCalendar3Event /> {activeRez.date}</p>
                <p><BsPeopleFill /> {activeRez.guests} guest(s)</p>
                <p><ImClock /> {activeRez.time}PM</p>
            </div>
            
        </div>
    )
}

export default ReservationComplete;