import React from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'


import Cards from './Cards'

export default function Galeria({onTagSelected, tagsValues, tagActive}) {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela Galeria</h2>
        <Tags tagActive ={tagActive} onTagSelected={onTagSelected} tagsValues={tagsValues}/>
        <Cards tagActive = {tagActive} styles={styles}/>
    </section>
  )
}
