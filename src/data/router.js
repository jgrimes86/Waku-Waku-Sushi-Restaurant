import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Content from "../Components/Content";
import Menu from "../Components/Menu";
import ReservationForm from "../Components/ReservationForm";
import Login from "../Components/Login";
import StaffPage from "../Components/StaffPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Content />,
                children: [
                    {
                        path: "/menu",
                        element: <Menu />
                    },
                    {
                        path: "/reservations",
                        element: <ReservationForm />
                    },
                    {
                        path: "/login",
                        element: <Login />
                    },
                    {
                        path: "/staff",
                        element: <StaffPage />
                    }
                ]
            }
        ]
    }
]);

export default router;