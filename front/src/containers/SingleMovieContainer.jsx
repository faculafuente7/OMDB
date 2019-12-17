import React from 'react';
import { connect } from 'react-redux';
import SingleMovie from '../components/SingleMovie'
import store from '../store/index'
import { addMovieToFavorites } from '../store/actions/favorites'
import { deleteFavorites } from '../store/actions/deleteFav'
import { fetchMovie } from '../store/actions/movies'


class SingleMovieContainer extends React.Component {
    constructor(props) {
        super(props)
        this.addFavorites = this.addFavorites.bind(this)
        this.delFavorites = this.delFavorites.bind(this)
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
    }


    addFavorites() {
        const movie = this.props.singleMovie
        const userId = this.props.user.id

        store.dispatch(addMovieToFavorites(movie, userId))
    }

    delFavorites(movie) {
        console.log("LLEGUE AL DEL FAVORITES")
        const userId = this.props.user.id

        store.dispatch(deleteFavorites(movie, userId))
    }

    render() {
        return (
            <SingleMovie
                favorites={this.props.favorites}
                addFavorites={this.addFavorites}
                delFavorites={this.delFavorites}
                user={this.props.user}
                singleMovie={this.props.singleMovie} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        singleMovie: state.selected,
        user: state.user,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMovie: inputValue => dispatch(fetchMovie(inputValue)),
    addMovieToFavorites: (movie, userId) => dispatch(addMovieToFavorites(movie, userId)),
    deleteFavorites: (movie, userId) => dispatch(deleteFavorites(movie, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer);

