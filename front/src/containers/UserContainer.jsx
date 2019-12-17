import React from 'react';
import User from '../components/User'
import store from '../store/index'
import { fetchFavorites } from '../store/actions/favorites'
import { deleteFavorites } from '../store/actions/deleteFav'
import { connect } from 'react-redux';


class UserContainer extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        let userId = this.props.user.id
        store.dispatch(fetchFavorites(userId))
    }

    onClick(movie) {
        let userID = this.props.user.id
        store.dispatch(deleteFavorites(movie, userID))
    }

    render() {
        return (
            <User
                onClick={this.onClick}
                user={this.props.user}
                favorites={this.props.favorites}
            />
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.user,
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({
    deleteFavorites: movie => dispatch(deleteFavorites(movie))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

