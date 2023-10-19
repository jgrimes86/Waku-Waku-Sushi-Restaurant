import { NavLink, useLocation} from "react-router-dom";

function NavBar({ isLoggedIn, toggleLogout }) {

    const location = useLocation();
    const navClass = (location.pathname === "/") ? "nav-bar nav-home" : "nav-bar";
    const disabledClass = (location.pathname === "/staff") ? "disabled" : "";
    const linkClass = (location.pathname === "/" ) ? `home-link ${disabledClass}`: `nav-link ${disabledClass}`;
    const loginLinkClass = (location.pathname === "/") ? `home-link`: `nav-link`;

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
                className={loginLinkClass}
                onClick={toggleLogout}
            >
                {isLoggedIn}
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