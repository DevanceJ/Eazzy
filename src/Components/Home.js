import React from 'react'
import { useGlobalContext } from '../context'
const Home = () => {
  const {loading, movie, setShowPopup} = useGlobalContext()
  const pop = () => {
    setShowPopup(true);
  }
  if (loading) {
    return <div className="loading">Loading...</div>
  }
  return (
    
      <div className='grid'>
        {movie.map((movie)=>{
          return <div key={movie.imdbID} className="dd">
          <div onClick = {pop} className="box">
            <img src={movie.Poster} alt="Thumbnail 1" />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
          </div>
        })}
      </div>
      
  )
}

export default Home