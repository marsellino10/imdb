import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './home.css';
import { Link } from 'react-router-dom';
import MoviesContainer from '../../components/movies contaier/MoviesContainer';

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

const Home = () => {

    const[films,setFilms] = useState([]);

    const fetchData = async () => {
       let res = await axios.get(baseUrl);
       let ff = await res.data.results;
       setFilms(ff);
       console.log(films);
    }

    useEffect( () => {
      fetchData();
    },[])

  return (
    <div className='poster'>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        /* dynamicHeight={true} */
      >
            {
                films.map(film => (
                    <Link to={`/movie/${film.id}`} key={film.id}>
                        {/* <div className="posterImage"> */}
                            <img src={`https://image.tmdb.org/t/p/original${film && film.backdrop_path}`} alt={film.title} className="posterimg"/>
                        {/* </div> */}
                        <div className="posterImage-overlay">
                            <div className="posterImage-title">{film?film.original_title:""}</div>
                            <div className="posterImage-runtime">
                                {film?film.release_date:""}
                                <p className='posterImage-rating'>
                                    {film?film.vote_average:""}
                                    <i className='fas fa-star'></i>{" "}
                                </p>
                            </div>
                            <div className="posterImage-decreption">
                                {film?film.overview:""}
                            </div>
                        </div>

                    </Link>
                ))
            }
      </Carousel>
      <MoviesContainer />
    </div>
  )
}

export default Home
