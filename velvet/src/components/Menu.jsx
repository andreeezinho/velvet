import styles from "../css/Home.module.css";
import VestidoLogo from "../components/VestidoLogo.jsx"
import CasacoLogo from "../components/CasacoLogo.jsx"
import AcessoriosLogo from "../components/AcessoriosLogo.jsx"


var cards = [
    {
        "titulo": "Vestidos",
        "img": <VestidoLogo />
    },
    {
        "titulo": "Casacos",
        "img": <CasacoLogo />
    },
    {
        "titulo": "Calçados e acessórios",
        "img": <AcessoriosLogo />
    }
]

function Menu() { 
    return(
        <div className={styles.containerCard}>
            {
                cards.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardImg}>{item.img}</div>
                        <div className={styles.cardTitulo}>
                            <h3>{item.titulo}</h3>
                            <button>Veja mais</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Menu;