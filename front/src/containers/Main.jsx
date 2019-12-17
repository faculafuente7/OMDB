import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import SingleMovieContainer from '../containers/SingleMovieContainer'
import UserContainer from './UserContainer';
import MoviesContainer from './MoviesContainer';
import NavbarContainer from './NavbarContainer';
import HomeContainer from './HomeContainer';
import store from '../store'
import { getUser } from "../store/actions/users";


class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        store.dispatch(getUser())
    }


    render() {
        return (
            <div>
                <NavbarContainer history={this.props.history} />
                <Switch>
                    <Route exact path="/"
                        component={HomeContainer}
                    />
                    <Route exact path="/search"
                        component={MoviesContainer}
                    />
                    <Route exact path="/login"
                        component={LoginContainer}
                    />
                    <Route exact path="/register"
                        render={() => <RegisterContainer history={this.props.history} />}
                    />
                    <Route exact path="/user"
                        component={UserContainer}
                    />
                    <Route exact path="/movies/:id"
                        component={SingleMovieContainer}
                    />
                </Switch>

            </div>
        )
    }
}


export default connect(null, null)(Main);


