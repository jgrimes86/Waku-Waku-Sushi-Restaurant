import { useState } from "react";

function Login() {

    const [password, setPassword] = useState("")

    function handleChange(event) {
        setPassword(event.target.value)
    }

    console.log(password)
    
    function onLogin() {
        if (password === "waku123") {
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