import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
    return (
    <>
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/cadastrar"><p className="opc">Cadastrar Produto</p></Link>
                </li>
                <li>
                    <Link to="/listar"><p className="opc">Listar Produto</p></Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Nav;