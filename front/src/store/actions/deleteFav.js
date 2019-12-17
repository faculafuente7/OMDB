import axios from 'axios'


export function deleteFav(fav) {
    return {
        type: "DELETE_FAV",
        favorites: fav
    }
}


export const deleteFavorites = (movie, userId) => dispatch => {
    console.log("ESTOY EN EL AXIOS PERROOOO", movie.imdbID, userId)
    axios.post('/api/delete', { imdbId: movie.imdbID, userId: userId })
        .then(res => {
            console.log(res.data)
            return dispatch(deleteFav(movie))
        })

}
