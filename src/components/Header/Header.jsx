import { NavLink } from "react-router-dom"

function Header () {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/'}>Questinary</NavLink>
                </li>
                <li>
                    <NavLink to={'/Answer'}>Answers</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header