import { useEffect, useState } from "react";
import MenuItem from "./MenuItem"

function Menu() {

    // menu items
    const [menuItems, setMenuItems] = useState([])
    
    // fetch menu data
    useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+"/menu")
        .then((resp) => resp.json())
        .then(items => setMenuItems(items))
    }, []);

    const renderMenuItems = menuItems.map((item) => (
        <MenuItem 
        key={item.id}
        name={item.name}
        image={item.image}
        description={item.description}
        />
    ))

    return (
        <>
            <h2>Menu</h2>
            <div className="menu">
                {renderMenuItems}
            </div>
        </>
    )
}

export default Menu;
