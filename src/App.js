
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import { useState } from "react";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState("Login")

  const toggleLogin = () => {
        setIsLoggedIn("Log Out")
    }

    console.log("app", toggleLogin)

    return (
        <div>
            <Header />
            <NavBar isLoggedIn={isLoggedIn}/>
            <Content toggleLogin={toggleLogin}/>
        </div>
    );
}

export default App;
