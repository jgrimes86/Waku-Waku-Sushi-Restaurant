import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Content from "../Components/Content";
import Menu from "../Components/Menu";
import ReservationForm from "../Components/ReservationForm";
import Login from "../Components/Login";
import StaffPage from "../Components/StaffPage";
import ReservationComplete from "../Components/ReservationComplete";
import ContactUs from "../Components/ContactUs";


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
                    },
                    {
                        path: "/reservation-success",
                        element: <ReservationComplete />     
                    },
                    {     
                        path: "/contact",
                        element: <ContactUs />
                    }

                ]
            }
        ]
    }
]);

export default router;