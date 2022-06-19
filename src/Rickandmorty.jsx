import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ResidentInfo from './components/ResidentInfo'
import LocationInfo from './components/LocationInfo'
import InputSearch from './components/InputSearch'
import UseLocationApi from './hooks/UseLocationApi'

const Rickandmorty = () => {

  const [searchLocation, setSearchLocation] = useState()
 
  const location = UseLocationApi(searchLocation)
 
  return (
    <div class="app"> 
      <h1 class="Titulo">Wiki ~ Rick And Morty</h1>  
      <p id="p5">choose a dimension from 1 to 126</p>
      <InputSearch setSearchLocation={setSearchLocation} />
     
      <LocationInfo location={location} />
      <p/>
      <div className="target">
        <span className="target">
          {location?.residents.map(resident => (
         
         <ResidentInfo  
          resident={resident} 
          key={resident}
          />

        ))}
        </span>
      </div>
      
    </div>

  )
  
}

export default Rickandmorty