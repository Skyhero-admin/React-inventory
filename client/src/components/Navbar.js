import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    // const signup("") = useNavigate();
    return(
        <div className="navBar">
            <span className="logo"><b>SKY MANAGEMENT</b></span>
            <ul>
                <li className="buttons">Sign Up</li>
                <li className="buttons">Log In</li>
            </ul>
        </div>
    )
}

export default Navbar;