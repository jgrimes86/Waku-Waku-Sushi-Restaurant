import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate(); 
    const { toggleLogin } = useOutletContext();

    const [password, setPassword] = useState("")

    function handleChange(event) {
        setPassword(event.target.value)
    }

    console.log("password: ", password)
    
    function onLogin(e) {
        if (password === "waku123") {
            toggleLogin();
            navigate("/staff");
            
            return console.log("Correct Password")
        } else {
            e.preventDefault()
            return console.log("Try again")
        }
        setPassword("")
    }

    const onEnterPress = (e) => {
        if(e.which === 13) {
            onLogin(e)            
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
                        onKeyPress={onEnterPress}
                        required
                    />
                </form>
                <button onClick={onLogin} type="submit">Submit</button>
            </div>
        </>
    )
}

export default Login;