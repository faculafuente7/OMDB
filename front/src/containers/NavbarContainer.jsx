import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/logout'
import { fetchMovies } from '../store/actions/movies'
import Navbar from '../components/Navbar';
import axios from 'axios'


class NavbarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.logout = this.logout.bind(this)
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            inputValue: value
        });
    }

    onSubmit(evt) {
        if (this.state.inputValue) {
            evt.preventDefault();
            this.props.fetchMovies(this.state.inputValue)
            this.props.history.push('/search');
        }
    }

    logout() {
        axios.get('/api/logout')
            .then(() => {
                this.props.logoutUser()
            })

    }


    render() {
        return (
            <Navbar
                user={this.props.user}
                logout={this.logout}
                onSubmit={this.onSubmit}
                handleChange={this.handleChange}
            />
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: inputValue => dispatch(fetchMovies(inputValue)),
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);