import React from 'react'

export default ({ user, favorites, onClick }) => (
    <div className="user" >
        <div id="user-profile" className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">User Email: {user.email}</h1>
                <p className="lead">Hi!, this is your profile. Here you can see your favorites movies.</p>
                <h2>Favorites Movies:</h2><br></br>
            </div>
        </div>
        <div id="favorites-movies-container">
            <div className="row" >
                {favorites.length <= 0 &&
                    <h3 id="text-dont-movies" >Don't have favorites movies.</h3>
                }
                {favorites.map(movie => (
                    <div id="card-user-id" className="card" key={movie.imdbId} >
                        <img src={movie.urlImage} ></img>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <a onClick={() => onClick(movie)} className="btn btn-danger">Delete Favorites</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

)
