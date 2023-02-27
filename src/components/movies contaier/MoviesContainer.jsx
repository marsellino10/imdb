import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../card/Card';
import './movies-cont.css';


const MoviesContainer = () => {

 const[filmsContainer,setFilmsContainer] = useState([]);
 const{type} = useParams();


    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        getData()
    }, [type]);

    const getData = async () => {
       let res = await axios.get(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
       let films = await res.data.results;
       setFilmsContainer(films);
       console.log(filmsContainer);
    }

  return (
    <div className='movies-conti'>
      <h2>{type?type:"POPULAR"}</h2>

     <div className="list">
     {filmsContainer.map((film) => (
        <Card movie={film} key={film.id}/>
      ))
      }
     </div> 
    </div>
  )
}

export default MoviesContainer
