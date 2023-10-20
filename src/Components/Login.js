import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate(); 
    const { toggleLogin } = useOutletContext();

    const [password, setPassword] = useState("")

    function handleChange(event) {
        setPassword(event.target.value)
    }
    
    function onLogin(e) {
        if (password === "waku123") {
            toggleLogin();
            navigate("/staff");
            setPassword("")
            
            return console.log("Correct Password")
        } else {
            e.preventDefault()
            return console.log("Try again")
        }
        
    }

    const onEnterPress = (e) => {
        if(e.which === 13) {
            onLogin(e)            
        }
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <div className="login-form">
                <p>Enter your password:</p>
                <form >
                    <input 
                        type="password"
                        name="password"
                        placeholder="try waku123"
                        onChange={handleChange}
                        onKeyDown={onEnterPress}
                        required
                    />
                </form>
                <button onClick={onLogin} type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Login;