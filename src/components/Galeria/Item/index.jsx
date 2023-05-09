import React from 'react'

export default function Item({foto, styles, favorito, open}) {
  return (
    <li key={foto.id} className={styles.galeria__card}>
    <img   className={styles.galeria__imagem} src={foto.imagem} alt={foto.titulo}/>
    <p className={styles.galeria__descricao}>{foto.titulo}</p>
    <div>
        <p>{foto.creditos}</p>
        <span>
            <img src={favorito} alt="Ícone coração de curtir" />
            <img src={open} alt="ícone de abrir modal" />
        </span>
    </div>
</li>
  )
}
