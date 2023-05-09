import Footer from "components/Footer";
import Galeria from "components/Galeria";
import Header from "components/header";
import Menu from "components/menu";
import Populares from "components/Populares";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'
import { useState } from "react";
const PaginaInicial = () => {
  let tagsValues =['Estrelas', 'Galáxias', 'Lua', 'Planetas','Todas']
  const [tagActive, setTagActive] = useState(tagsValues)
  function onTagSelected(tag){
    setTagActive(tag)
    // if(tag === 'Todas'){
      
    //   setTagActive(tagsValues)
    //   console.log(tagsValues, tagActive)
    //   console.log(tagsValues === tagActive)
      
    
    // }else {
    //   setTagActive(tag)
    // }
 
    
    
    
  }
 
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
        <div className={styles.galeria}>
        <Galeria tagActive = {tagActive} tagsValues = {tagsValues} onTagSelected = {onTagSelected}/>
        <Populares/>
      </div>
      </main>
     
      <Footer/>
     
    </>
  );
};

export default PaginaInicial;
