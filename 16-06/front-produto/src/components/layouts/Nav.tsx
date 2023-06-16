import { Link } from "react-router-dom";

function Nav() {
    return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/cadastrar">Cadastrar Produto</Link>
                </li>
                <li>
                    <Link to="/listar">Listar Produto</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Nav;