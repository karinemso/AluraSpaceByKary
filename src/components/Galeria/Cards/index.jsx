import React from 'react'
import fotos from '../fotos.json'
import open from "../open.png"
import favorito from "../favorito.png"
import Item from '../Item'
export default function Cards({styles, tagActive}) {
  let fotosArray = fotos.filter((foto) => tagActive.includes(foto.tag));
  if(tagActive === 'Todas'){
    fotosArray = fotos
  }
  return (
    <ul className={styles.galeria__cards}>
    {fotosArray.map((foto)=>{
        return(
         <Item foto = {foto} styles = {styles} favorito ={favorito} open={open}/>
        )
    })}
</ul>
  )
}
