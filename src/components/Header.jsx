import { NavLink } from "react-router-dom";

export default function Header() {


    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-dark bg-dark"
            >
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Boolezon</NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/contacts" aria-current="page">Chi Siamo
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/prodotti">Prodotti</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}