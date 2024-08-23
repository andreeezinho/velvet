import styles from "../css/Home.module.css";
import Menu from "../components/Menu.jsx";

function Home() {
    return(
        <div className={styles.containerSecao}>
            <div className={styles.section}>
                <div className={styles.frase}>
                    <h2>ROUPAS</h2>
                    <h3>VELVET</h3>
                </div>

                <div className={styles.img}></div>

                <div className={styles.contador}>
                    <div className={styles.containerFrase}>
                        <h2>Vista-se de confiança,</h2>
                        <h3>vista-se de nós.</h3>
                        
                    </div>
                    <div className={styles.btn}>
                        <button>Navegue pelo nosso site</button>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default Home;