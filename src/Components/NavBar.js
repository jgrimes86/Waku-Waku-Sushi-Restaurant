import { NavLink, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();
    console.log(location)

    const navClass = (location.pathname === "/") ? "nav-bar nav-home" : "nav-bar";

    const linkClass = (location.pathname === "/") ? "home-link": "nav-link";

    return (
        <nav className={navClass}>
            <NavLink
                to="/"
                className={linkClass}
            >
                Home
            </NavLink>
            <NavLink
                to="/menu"
                className={linkClass}
            >
                Menu
            </NavLink>
            <NavLink
                to="/reservations"
                className={linkClass}

            >
                Reservations
            </NavLink>
            <NavLink
                to="/login"
                className={linkClass}
            >
                Login
            </NavLink>
            <NavLink
                to="/staff"
                className={linkClass}
            >
                StaffPage
            </NavLink>
        </nav>
    )
}

export default NavBar;