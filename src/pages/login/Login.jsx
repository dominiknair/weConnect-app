import { Link } from "react-router-dom";
import './login.css';

function Login() {
    return (

        <div className="login">
            <div className="center">
                <h1>Login</h1>
                <form>
                    <div className="txt_field">
                        <input type="text" required/>
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <input type="submit" value="Login"/>
                    <div className="register_link">
                        Not a member? 
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    
    )
}

export default Login;