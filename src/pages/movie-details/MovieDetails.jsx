import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';

import './movie-det.css'

const MovieDetails = () => {

  const[currentMovieDetail,setCurrentMovie] = useState();
  const {id} = useParams();

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
        let film = await res.data;
        setCurrentMovie(film);
        console.log(film);
     }

  return (
    <div className="movie-detail">
        <img className='cover-img' src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}  alt="" />
        <div className="movie-details position-absolute top-50 start-0 mt-5 ms-5 mb-5">
            <img className='movie-poster' src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="" />
            <div className="movie-details-right">
                        <div className="movie-name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie-tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie-rating">
                            {currentMovieDetail ? Number((currentMovieDetail.vote_average).toFixed(1)): ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie-runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie-releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie-genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <span key={genre.id} className="movie-genre" id={genre.id}>{genre.name}</span>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    
            </div>
            
        </div>
            <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>
        <div className="links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && 
                    <a href={currentMovieDetail.homepage} target="_blank"><p>
                        <span className="movie__homeButton movie__Button">Homepage 
                        <i className="newTab fas fa-external-link-alt"></i>
                        </span>
                        </p>
                        </a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank"><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>

            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
    </div>
  )
}

export default MovieDetails
