import styles from './Tags.module.scss'


import React, { useState } from 'react'

export default function Tags({onTagSelected, tagsValues, tagActive}) {
 let allTags =   ['Estrelas', 'Galáxias', 'Lua', 'Planetas','Todas']
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
          {tagsValues.map((tag) =>{
            return(<li key={tag} className={tagActive === tag ? styles.active  :{}} onClick={() => {onTagSelected(tag)}}>{tag}</li>)
               
          })}
        </ul>
    </div>
  )
}
