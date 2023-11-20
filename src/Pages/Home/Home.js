import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovieList from '../../Components/movielist/movieList';
const Home = () => {
    const [popularmovie,setPopularmovie] = useState([])
    useEffect(()=>{
        fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        )
          .then((res) => res.json())
          .then((data) => setPopularmovie(data.results));
        
    },[])
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularmovie.map((movie) => (
           
            <>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              >
                <div className="posterImage">
                  
                  
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                  />
                </div>
                <div className="posterImage_overlay">
                  <div className="posterImage_title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage_runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage_rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="posterImage_description">
                    <span> {movie ? movie.overview : ""}</span>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
}

export default Home
