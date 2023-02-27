import React, { useEffect, useState } from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import 'react-loading-skeleton/dist/skeleton.css'

import './card.css';

const Card = ({movie}) => {

    const[isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },1500)
    },[]);

  return (
    <div className='film-card'>
      {
        isLoading?
        <div className="cards">
            <SkeletonTheme color='#202020' highlightColor='#444'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>:
        <Link to={`/movie/${movie.id}`}>
            <div className="cards">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} 
                alt={movie.title} className="card-img"/>

                <div className="card-overlay">
                    <div className="card-title">{movie && movie.original_title}</div>
                    <div className="card-runtime">
                                {movie?movie.release_date:""}
                                <p className='card-rating'>
                                    {movie?movie.vote_average:""}
                                    <i className='fas fa-star'></i>{" "}
                                </p>
                    </div>
                    <div className="card-description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
      }
    </div>
  )
}

export default Card
