import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login Component</h1>
            <form>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
