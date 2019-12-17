import React from 'react';
import { connect } from 'react-redux';
import Movies from '../components/Movies'

class MoviesContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Movies
                user={this.props.user}
                movies={this.props.movies}
            />
        )
    }
}


const mapStateToProps = (state) => ({
    movies: state.movies,
    user: state.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(MoviesContainer);