import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register'
import axios from 'axios';
import registerUser from '../store/actions/users'

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            inputLastName: "",
            inputEmail: "",
            inputPassword: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handlechangeLastName = this.handlechangeLastName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChangeName(evt) {
        const value = evt.target.value;
        this.setState({
            inputName: value
        })
    }

    handlechangeLastName(evt) {
        const value = evt.target.value;
        this.setState({
            inputLastName: value
        })
    }

    handleChangeEmail(evt) {
        const value = evt.target.value;
        this.setState({
            inputEmail: value
        });
    }

    handleChangePassword(evt) {
        const value = evt.target.value;
        this.setState({
            inputPassword: value
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        if (this.state.inputPassword && this.state.inputEmail) {
            axios.post('/api/users', this.state)
                .then(data => {
                    if (data.data == "EL USUARIO YA EXISTE") {
                        alert(data.data)
                    } else {
                        alert("USUARIO CREADO")
                        console.log(data)
                    }
                })
            return this.props.history.push('/login')
        }
    }

    render() {
        return (
            <Register
                handleChangeName={this.handleChangeName}
                handleChangeLastName={this.handlechangeLastName}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePassword={this.handleChangePassword}
                onSubmit={this.onSubmit}
            />
        )
    }
}



export default connect()(RegisterContainer)