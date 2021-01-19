import React from 'react';


const Login = () => {
    return (
        <div>
            <h1>Hello</h1>
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;