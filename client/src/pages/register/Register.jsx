import "./register.css";
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div className ="register">
        <span className="registerTitle">Register</span>
        <form className ="registerForm">
            <label>UserName</label>
            <input type="text" className="registerInput" placeholder="Enter Your username..."/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter Your email..."/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Entery Your password"/>
            <button className="registerButton">
              <Link to="/register">Register</Link>
            </button>
        </form>
            <button className="registerLoginButton">
              <Link to="/login">Login</Link>
            </button>
    </div>
  )
}
