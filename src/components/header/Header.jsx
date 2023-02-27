import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../IMDB_Logo_2016.svg.png';

import './header.css';

const Header = () => {
  return (
    <div className='imdb-header'>
      <div className="header-left">
        <Link to='/'><img src={logo} alt="" className='header__icon'/></Link>
        <p><Link to='movies/popular'>Popular</Link></p>
        <p><Link to='movies/top_rated'>Top Rated</Link></p>
        <p><Link to='movies/upcoming'>Upcoming</Link></p>
      </div>
    </div>
  )
}

export default Header
