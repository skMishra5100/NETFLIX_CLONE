import React, { useState } from 'react'

const Log = () => {
    const [current, set] = useState("SignIn");

    return <>
        <div className="login-container">
            <form className="login-form">
                {current == "SignIn" ? <h2>Sign In</h2> : <h2>Log In</h2>}
                {current == "SignIn" && <input type="text" placeholder="Full Name..." required />}
                {current == "SignIn" && <input type="text" placeholder="Address" required />}
                <input type="email" placeholder="Email or phone number" required />
                <input type="password" placeholder="Password" required />
               {current=="SignIn"?<button type="submit">Sign In</button>: <button type="submit">Log In</button>}
                <div className="help-options">
                    <span>New to Netflix? <p style={{color:'red'}} onClick={() => set(current=="SignIn"?"LogIn":"SignIn")}>Sign In now</p></span>
                </div>
            </form>
        </div>
    </>

}

export default Log
