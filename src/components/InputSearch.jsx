import React from 'react'

const InputSearch = ({setSearchLocation}) => {

  
    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }
  return (
    <form  class="Busqueda" onSubmit={searchLocation}>
        <input id="barra" size="50"  type="text"/> 
        <button id="boton">Search</button>
    </form>
  )
  }

export default InputSearch