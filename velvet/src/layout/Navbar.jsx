import {Link} from "react-router-dom";
import styles from "../css/Navbar.module.css";
import {FaHeart, FaCartPlus} from "react-icons/fa";
import BarraPesquisa from "../components/BarraPesquisa.jsx";

function Navbar() {
    return(
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    <h1><span>V</span>elvet</h1>
                </div>

                <div className={styles.menu}>
                    
                    <menu>
                        <ul>
                            <li className={styles.btnLogin}><Link to="/">Entrar</Link></li>
                            <li className={styles.btnLogin}><Link to="/">Cadastar</Link></li>
                        </ul>

                        <ul className={styles.barrinha}> 
                            <li>|</li>
                        </ul>

                        <ul className={styles.usuario}>
                            <BarraPesquisa/>
                            <li><Link to="/"><FaHeart /></Link></li>
                            <li><Link to="/"><FaCartPlus /></Link></li>
                        </ul>

                    </menu>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;