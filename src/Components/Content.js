import Menu from "./Menu";
import Reservation from "./Reservation";
import Login from "./Login";
import ManageReservations from "./ManageReservations";

function Content() {
    return (
        <div>
            <Menu />
            <Reservation />
            <Login />
            
            <ManageReservations />
        </div>
    )
}

export default Content;