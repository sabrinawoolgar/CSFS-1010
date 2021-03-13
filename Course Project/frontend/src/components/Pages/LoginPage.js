import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (
        <div className="loginPage">

        <h2>log in</h2>
            
            <div className="BodyContent">
                {!auth && alert("login details invalid, please try again") }
                    <form onSubmit={loginSubmit}>
                        <p> <label htmlFor="username"> username:</label>
                            <br /><input type="text" name="username" id="username" className="textbox" required value={username} onChange={e => setUsername(e.target.value) } /> </p>
                        <p><label htmlFor="password">password:</label>
                            <br /><input type="password" name="password" id="password" className="textbox" required value={password} onChange={e => setPassword(e.target.value) } /> </p>

                        <p><input type="submit" id="submit" defaultValue="log in" className="button" /> </p>
                    </form>
            </div>

    </div>
  );
}

export default Login