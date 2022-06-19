import React from 'react'

const LocationInfo = ({location}) => {

   

  return (
    
    <article id="frame1">
     <p id="c">.</p>
      <h2 id="Title2">{location?.name}</h2>
      <ul id="Locations2" >
        <p><span class="colorv">Type: </span>{location?.type}</p>
        <p><span class="colorv">Dimension: </span>{location?.dimension}</p>
        <p><span class="colorv" >Population: </span>{location?.residents.length}</p>


      </ul>
    </article>

  )
}

export default LocationInfo