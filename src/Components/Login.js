import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate(); 
    const { toggleLogin } = useOutletContext();

    console.log("login", toggleLogin)

    const [password, setPassword] = useState("")

    function handleChange(event) {
        setPassword(event.target.value)
    }
    
    function onLogin() {
        if (password === "waku123") {
            toggleLogin();
            navigate("/staff");
            
            return console.log("Correct Password")
        } else {
            return console.log("Try again")
        }
    }

    return (
        <>
            <h2>Login</h2>
            <div className="login">
                <form >
                    <input 
                        type="password"
                        name="password"
                        placeholder="try waku123"
                        onChange={handleChange}
                        required
                    />
                </form>
                <button onClick={onLogin} type="submit">Submit</button>
            </div>
        </>
    )
}

export default Login;