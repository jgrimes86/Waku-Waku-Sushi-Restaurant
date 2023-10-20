import Footer from "./Footer";
import { Outlet, useOutletContext } from "react-router-dom";

function Content() {

    const context = useOutletContext();

    return (

        <div className="layout">
            <Outlet context={{...context}} />
            <Footer />
        </div>

    )
}

export default Content;