import React from "react";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import { useState,useEffect } from "react"
import Nav from "./Components/Nav"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Title from "./pages/Title";

function App() {
  const[movie,setMovie] = useState([])
  const[titleClick,setTitleClick] = useState('');
  const[likes,setLikes] = useState(0);
  
  const getUserClick = (data,likes) => {
      setTitleClick(data);
      setLikes(likes)
      // console.log(likes)
  }
  

  useEffect(()=>{
    
    fetch('./data.json')
    .then(response => response.json())
    .then((resJson)=>{
      setMovie(resJson)
    })
    
  },[])



  return (
    <div className="container">
      <BrowserRouter>
        <div className="header">
          <Nav />
        </div>
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='home' element={<Home />}></Route>
            <Route path='movies' element={<Movies movieData={movie} getUserClick={getUserClick}/>}></Route>
            <Route path='title' element={<Title  movieData={movie} titleClick={titleClick} likes={likes}/>}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
