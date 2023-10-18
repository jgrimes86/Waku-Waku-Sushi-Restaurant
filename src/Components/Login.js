import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [password, setPassword] = useState("")
    const navigate = useNavigate(); 

    function handleChange(event) {
        setPassword(event.target.value)
    }
    
    // console.log(password)
    
    function onLogin() {
        if (password === "waku123") {
            navigate("/staff");
            return console.log("Correct Password")
        } else {
            return console.log("Try again")
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
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
    )
}

export default Login;