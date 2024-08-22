import styles from "../css/Home.module.css";

import img from "../img/espera.svg";
import Contador from "../components/Contador.jsx";

function Home() {
    return(
        <div className={styles.section}>
            <div className={styles.img}>
                <img src={img} alt="Imagem de espera" />
            </div>
            <div className={styles.contador}>
                <Contador />
                <h2>Nosso site está quase pronto!</h2>
                <p>Aguarde nossa inauguração para adquirir produtos da melhor qualidade</p>
            </div>
        </div>
    );
}

export default Home;