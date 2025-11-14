import { NavLink } from "react-router-dom";

export default function Header() {


    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div className="container">
                    <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                    <NavLink
                        className="navbar-toggler d-lg-none"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" href="#" aria-current="page">Home
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">Link</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}