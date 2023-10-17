import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/menu"
                className="nav-link"
            >
                Menu
            </NavLink>
            <NavLink
                to="/reservations"
                className="nav-link"

            >
                Reservations
            </NavLink>
            <NavLink
                to="/login"
                className="nav-link"
            >
                Login
            </NavLink>
            <NavLink
                to="/staff"
                className="nav-link"
            >
                StaffPage
            </NavLink>
        </nav>
    )
}

export default NavBar;