import React, { useState } from 'react'

const Log = () => {
    const [current, set] = useState("SignIn");

    return <>
        <div class="login-container">
            <form class="login-form">
                {current == "SignIn" ? <h2>Sign In</h2> : <h2>Log In</h2>}
                {current == "SignIn" && <input type="text" placeholder="Full Name..." required />}
                {current == "SignIn" && <input type="text" placeholder="Address" required />}
                <input type="email" placeholder="Email or phone number" required />
                <input type="password" placeholder="Password" required />
               {current=="SignIn"?<button type="submit">Sign In</button>: <button type="submit">Log In</button>}
                <div class="help-options">
                    <p>New to Netflix? <p style={{color:'red'}} onClick={() => set(current=="SignIn"?"LogIn":"SignIn")}>Sign In now</p></p>
                </div>
            </form>
        </div>
    </>

}

export default Log
