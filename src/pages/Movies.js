
import {Link} from 'react-router-dom'

const Movies = ({movieData,getUserClick}) => {

   

  return (
    <div className='movies'>
      <h3>Movies</h3>
      {movieData.map((val,i)=>{
          return <Link to={'/title'} key={i} ><li key={i} onClick={()=>getUserClick(val.title,val.total_likes)}>
          
          {val.title}
          

        </li></Link>
      })}
    </div>
  )
}

export default Movies
