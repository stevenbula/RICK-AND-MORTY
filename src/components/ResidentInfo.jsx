import axios from 'axios'
import React,{useEffect, useState} from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const ResidentInfo = ({resident}) => {
    
  const character = useCharacterApi(resident)
    
  return (
    <article class="Box">
        <img class ="image" src={character?.image} alt="" />
         <h2 id="title">{character?.name}</h2>
          <p id="clr"><span id="INFO">Status: </span>{character?.status}</p>
          <p id="clr"><span id="INFO">Birthplache:</span> {character?.origin.name} </p>
          <p id="clr"><span id="INFO"> Episodes Where Appear: </span>{character?.episode.length} </p>    
           
    </article>
  )
}

export default ResidentInfo