import { useState } from 'react'
import {AiOutlineLike} from 'react-icons/ai'

const Title = ({movieData,titleClick,likes}) => {

const[active,setActive] = useState(false);
const[totalLikes,setTotalLikes] = useState(parseInt(likes));
const[liked,setliked] = useState(false);


const onClick = () =>{
    setActive(!active);
    if(!liked){
      setTotalLikes(totalLikes + 1);
      setliked(true);
      
    }else if(liked){
      setTotalLikes(totalLikes -1);
      setliked(false)
    }
}


  return (
    <div className="title">
       {movieData.map((val,i)=>{
        
        if(val.title===titleClick){
          return<li key={i} >
            <br></br>
            <div className="display">
            <div className="image">
            <img src={val.image} alt="" width={250} ></img><br></br>
            </div>
            <div className="text">
             Year: {val.year}<br></br>
             Title: {val.title}<br></br>
             Rating: {val.rating}<br></br>
             Description: {val.description}<br></br>
             <button className='like' style={{backgroundColor: active ? "white" : '',color:active ? 'blue': ''}} 
             
              onClick={onClick} >
              <AiOutlineLike size={25} style={{color:active ? 'blue' : ''}}/>
             {totalLikes} 
             
            </button>
             
            </div>
            </div>
            
             


            
          </li>
        
        }return null;
        
       })}
    </div>
  )
}

export default Title
