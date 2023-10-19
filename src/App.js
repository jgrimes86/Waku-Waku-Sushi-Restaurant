
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"

const databaseURL = "http://localhost:3001"

function App() {

    const [reservations, setReservations] = useState([]);
    const [friRez, setFriRez] = useState([])
    const [satRez, setSatRez] = useState ([])
    const [activeRez, setActiveRez] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState("Login")

    useEffect(() => {
        fetch(databaseURL+"/reservations")
        .then(resp => resp.json())
        .then(setReservations)

        fetch(databaseURL+"/friday_tables")
        .then(resp => resp.json())
        .then(setFriRez)

        fetch(databaseURL+"/saturday_tables")
        .then(resp => resp.json())
        .then(setSatRez)
    }, [])

    function onNewRez(newRez) {
        setReservations(currentRez => [...currentRez, newRez])
    }

    function handleChangeReservation(changedReservation) {
        setReservations(reservations => reservations.map(res => {
            if (res.id === changedReservation.id) {
                return changedReservation
            } else return res
        }))
    }

    function onFriTableUpdate(updatedTable) {
        setFriRez(currentTables => currentTables.map(table => {
            if (table.id === updatedTable.id) {
                return updatedTable;
            } else {
                return table
            }
        }))
    }

    function onSatTableUpdate(updatedTable) {
        setSatRez(currentTables => currentTables.map(table => {
            if (table.id === updatedTable.id) {
                return updatedTable;
            } else {
                return table
            }
        }))
    }

    const toggleLogin = () => {
        setIsLoggedIn("Log Out")
    }

    const toggleLogout = () => {
        if (isLoggedIn === "Log Out") {
            setIsLoggedIn("Login")
        }
    }

    const context = {
        reservations, 
        friRez, 
        satRez, 
        onNewRez, 
        setFriRez,
        setSatRez,
        onFriTableUpdate,
        onSatTableUpdate,
        handleChangeReservation,
        activeRez,
        setActiveRez,
        toggleLogin
    }

    return (
        <div>
            <Header />
            <NavBar isLoggedIn={isLoggedIn} toggleLogout={toggleLogout}/>
            <Outlet context={context}/>
        </div>
    );
}

export default App;
