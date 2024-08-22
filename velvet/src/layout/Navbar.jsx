import {Link} from "react-router-dom";
import styles from "../css/Navbar.module.css";
import {FaCartPlus} from "react-icons/fa";


function Navbar() {
    return(
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    <menu>
                        <ul>
                            <li><Link to="/">Promoções</Link></li>
                            <li><Link to="/">Masculino</Link></li>
                            <li><Link to="/">Feminino</Link></li>
                        </ul>
                    </menu>
                </div>

                <div className={styles.menu}>
                    <menu>
                        <ul className={styles.usuario}>
                            <li><Link to="/"><FaCartPlus /></Link></li>
                            <li className={styles.btnLogin}><Link to="/">Login</Link></li>
                        </ul>
                    </menu>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;