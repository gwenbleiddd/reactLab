

import { useState } from 'react'
import {Link} from 'react-router-dom'

const Movies = ({movieData,getUserClick}) => {
const[select,setSelected] = useState('');
  
const RatingSorter = (a,b) =>{
  if(a.rating > b.rating){
    return-1
  }
  if (a.rating < b.rating) {
    return 1;
  }
  return 0;
}

const aZSorter = (a,b) =>{
  if(a.title < b.title){
    return -1
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

const yearSorter = (a,b) =>{
  if(a.year > b.year){
    return -1
  }
  if (a.year < b.year) {
    return 1;
  }
  return 0;
}

const sortChooser = (type) =>{
  if(type==='Title'){
    return aZSorter;
  }else if(type==='Rating'){
    return RatingSorter;
  }else if(type==='Year'){
    return yearSorter;
  }
} 


 //console.log(select)
 
  return (
    <div className='movies'>
         <h3>Movies</h3>
      <div className='text1'>
         <h5>Sort</h5>
      </div>
      <div className='selector'>
          <select onChange={(e)=>setSelected(e.target.value)}>
            <option unselectable=''>Choose order</option>
            <option>Title</option>
            <option>Rating</option>
            <option>Year</option>
          </select>
      </div>
      
      <br></br><br></br>
      {movieData.sort(sortChooser(select))
      .map((val,i)=>{
          return <Link to={'/title'} key={i} ><li key={i} onClick={()=>getUserClick(val.title,val.total_likes)}>
          
          {val.title}
          

        </li></Link>
      })}
    </div>
  )
}

export default Movies
