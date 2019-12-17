import axios from 'axios'

export function receiveFavs(favs) {
    return {
        type: "RECEIVE_FAV",
        favorites: favs
    }
}

export const addMovieToFavorites = (movie, id) => dispatch => {

    axios
        .post('/api/favorites', movie, id)
        .then(res => {
            return dispatch(receiveFavs(res.data))
        });
}


export const fetchFavorites = (userId) => dispatch => {
    axios
        .get('/api/favorites', userId)
        .then(res => {
            return dispatch(receiveFavs(res.data))
        })
}

