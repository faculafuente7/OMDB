import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => (
    <div className="movies">
        <div className="row">
            {!user.email &&
                <div id="jumbotron-home" className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">OMDB APP IS THE FREE DEMAND VIDEO PLATFORM TO SEE ALL CONTENTS WHERE YOU WANT, WHEN YOU WANT.
THE FILMS AND SERIES, DOCUMENTS AND SHORTS, NEW LOOKS AND CLASSICS OF ALWAYS TO ENJOY THEM FROM ANY DEVICE.</p>
                    <hr className="my-4"></hr>
                    <p>Login or register to better enjoy these contents.</p>
                    <Link className="btn btn-primary btn-lg" to="/login" role="button">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="btn btn-primary btn-lg" to="/register" role="button">Register</Link>
                </div>
            }
            {user.email &&
                <div id="jumbotron-home" className="jumbotron">
                    <h1 className="display-4">Hello, {user.email}!</h1>
                    <p className="lead">OMDB APP IS THE FREE DEMAND VIDEO PLATFORM TO SEE ALL CONTENTS WHERE YOU WANT, WHEN YOU WANT.
THE FILMS AND SERIES, DOCUMENTS AND SHORTS, NEW LOOKS AND CLASSICS OF ALWAYS TO ENJOY THEM FROM ANY DEVICE.</p>
                    <hr className="my-4"></hr>
                    <p>
                        Visit your profile to see which movies you selected as favorites.</p>
                    <Link className="btn btn-primary btn-lg" to="/user" role="button">Profile</Link>
                </div>
            }
        </div>
    </div>
);


export default Home