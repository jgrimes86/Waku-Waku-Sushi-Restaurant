import { Outlet, useOutletContext } from "react-router-dom";

function Content() {

    const context = useOutletContext();

    return (
        <div>
            <Outlet context={{...context}} />
        </div>
    )
}

export default Content;