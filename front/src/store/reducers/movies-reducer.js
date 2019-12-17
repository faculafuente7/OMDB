
const initialState = {
    movies: [],
    selected: {},
    user: {},
    favorites: []

}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_MOVIES':
            return Object.assign({}, state, { movies: action.movies });
        case 'RECEIVE_MOVIE':
            return Object.assign({}, state, { selected: action.movie })
        case 'LOGIN_USER':
            return Object.assign({}, state, { user: action.user });
        case 'LOGOUT_USER':
            return Object.assign({}, state, { user: action.user, favorites: action.favorites });
        case 'RECEIVE_FAV':
            if (!Array.isArray(action.favorites))
                return { ...state, favorites: [...state.favorites, action.favorites] };
            else {
                return { ...state, favorites: action.favorites };
            }
        case 'DELETE_FAV':
            return {
                ...state,
                favorites: state.favorites.filter(item => item !== action.favorites)
            };
        default:
            return state
    }
}