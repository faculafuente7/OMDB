import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => (
    <div className="movies">
        <div className="row">
            {movies &&
                movies.map(movie => (
                    <div id="card-id" className="card" key={movie["imdbID"]} >
                        <Link to={`/movies/${movie["imdbID"]}`} >
                            <img className="card-img-top" src={movie["Poster"]} />
                            <div className="card-body">
                                <h1 id="title-movies-card" >Title: {movie["Title"]}</h1>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    </div>
);


export default Movies

