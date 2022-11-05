import React from 'react'
import './register.css';

function Register() {
  return (
    <div className="register">
        <div className="center">
            <h1>Register</h1>
            <form>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Name</label>
                </div>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="txt_field">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="Login"/>
                <div className="login_link">
                    Already have an account? <button href='#'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register;
