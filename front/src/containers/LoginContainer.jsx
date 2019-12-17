import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login'
import axios from 'axios';
import { fetchUser } from '../store/actions/users'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: "",
            inputPassword: ""
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChangeEmail(evt) {
        const value = evt.target.value;
        console.log(value)
        this.setState({
            inputEmail: value
        });
    }

    handleChangePassword(evt) {
        const value = evt.target.value;
        console.log(value)
        this.setState({
            inputPassword: value
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        console.log(this.state.inputEmail, this.state.inputPassword)
        if (this.state.inputPassword && this.state.inputEmail) {
            console.log(this.state)
            axios.post('/api/login', this.state)
                .then(res => {
                    if (!res.data) {
                        alert('Datos Incorrectos!')
                    }
                    else {
                        this.props.fetchUser(res.data)
                        this.props.history.push('/')
                    }
                })
        }
    }

    render() {
        return (
            <Login
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapDispatchToProps = () => dispatch => ({
    fetchUser: user => dispatch(fetchUser(user))
})


export default connect(null, mapDispatchToProps)(LoginContainer)