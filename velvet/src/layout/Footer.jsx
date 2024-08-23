import styles from "../css/Footer.module.css";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
    return(
        <footer className={styles.footer}> 
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1><span>V</span>elvet</h1>
                </div>
                
                <div className={styles.tabela}>
                    <ul>
                        <p>Empresa</p>
                        <li>Nossos produtos</li>
                        <li>Contate-nos</li>
                        <li>Sobre nós</li>
                    </ul>
                    <ul className={styles.sociais}>
                        <p>Redes Socias</p>
                        <li><FaFacebook /> Facebook</li>
                        <li><FaInstagram/> Instagram</li>
                        <li><FaWhatsapp /> Whatsapp</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;