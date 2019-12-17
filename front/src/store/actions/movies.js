import axios from 'axios';


const receiveMovies = (movies) => ({
    type: 'RECEIVE_MOVIES',
    movies: movies
});

const receiveMovie = (movie) => ({
    type: 'RECEIVE_MOVIE',
    movie,
});

export const fetchMovies = inputValue => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${inputValue}`)
        .then(res => res.data)
        .then(movies => dispatch(receiveMovies(movies.Search)))
        .catch(err => { console.log(err) });


export const fetchMovie = inputValue => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${inputValue}`)
        .then(movie => dispatch(receiveMovie(movie.data)));