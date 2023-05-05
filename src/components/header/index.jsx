import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

const Header = () => {
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" name="" id="" placeholder="O que você procura?"/>
                <img src={search} alt="Icone da Lupa" />
            </div>
        </header>
    )
}


export default Header