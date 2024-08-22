import styles from "../css/Navbar.module.css"
import { FaSearch } from "react-icons/fa";

function BarraPesquisa(tipo, descricao) {
    return(
        <div className={styles.barraPesquisa}>
            <label htmlFor="input">
                <FaSearch />
                <input id="input" type="text" placeholder="Faça sua pesquisa" />
            </label>
        </div>
    );
}

export default BarraPesquisa;