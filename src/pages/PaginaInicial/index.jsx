import Footer from "../../components/Footer";
import Galeria from "../../components/Galeria";
import Header from "../../components/header";
import Menu from "../../components/menu";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'
const PaginaInicial = () => {
  return (
    <> 
    <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da Terra vista do espaço" />
          </div>
        </section>
      </main>
      <div className={styles.galeria}>
        <Galeria/>
      </div>
      <Footer/>
     
    </>
  );
};

export default PaginaInicial;
