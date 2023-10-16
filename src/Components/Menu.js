import { useEffect } from "react";
import MenuItem from "./MenuItem"

function Menu() {
    
    // fetch menu data
    useEffect(() => {
    fetch("http://localhost:3001/menu")
        .then((resp) => resp.json())
        .then(menuItems => console.log(menuItems))
    }, []);

    return (
        <div>
            <h2>Menu</h2>
            <MenuItem/>
        </div>
    )
}

export default Menu;
