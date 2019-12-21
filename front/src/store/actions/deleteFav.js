import axios from 'axios'


export function deleteFav(fav) {
    return {
        type: "DELETE_FAV",
        favorites: fav
    }
}


export const deleteFavorites = (movie, movieId, userId) => dispatch => {
    axios.post('/api/delete', { imdbId: movieId, userId: userId })
        .then(res => {
            return dispatch(deleteFav(movie))
        })

}
