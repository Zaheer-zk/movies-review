import React from 'react'
import './Card.css'

const Card = ({Title, Year, Poster}) => {
  return (
    <div className='card'>
        <img src={Poster} alt="Movie Poster" className='card__poster'/>
        <div>
            <h3>{Title}</h3>
            <h4>{Year}</h4>
        </div>
    </div>
  )
}

export default Card