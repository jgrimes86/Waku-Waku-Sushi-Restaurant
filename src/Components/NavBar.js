import { NavLink, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();
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
                to="/contact"
                className={linkClass}
            >
                Contact Us
            </NavLink>
        </nav>
    )
}

export default NavBar;