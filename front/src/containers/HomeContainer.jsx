import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home'





class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Home
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

export default connect(mapStateToProps, null)(HomeContainer);