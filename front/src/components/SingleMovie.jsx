import React from 'react';

export default ({ singleMovie, user, addFavorites, favorites, delFavorites }) => {

    let movies = []

    favorites.map(e => {
        movies.push(e.imdbId)
    })

    console.log(singleMovie)

    return (
        <div id="card-id-single-movie" className="movies">
            <h3>Movie</h3>
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={singleMovie.Poster} id="single-movie-id" className="card-img" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Title:</strong>  {singleMovie.Title}</h5>
                            <h5 className="card-title"><strong>Year:</strong> {singleMovie.Year}</h5>
                            <h5 className="card-title"><strong>Type:</strong> {singleMovie.Type}</h5>
                            <p className="card-text">{singleMovie.Plot}</p>
                            <p className="card-text"><small className="text-muted">{singleMovie.Production}</small></p>
                            {user.email && !movies.includes(singleMovie.imdbID) &&
                                <button onClick={addFavorites} className="btn btn-primary">Add to Favorites </button>
                            }
                            {user.email && movies.includes(singleMovie.imdbID) &&
                                <button onClick={() => delFavorites(singleMovie)} className="btn btn-danger">Delete to Favorites </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

