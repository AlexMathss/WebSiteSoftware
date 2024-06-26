
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default Header;