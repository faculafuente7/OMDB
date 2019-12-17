import React from "react"
import { Link } from "react-router-dom";

export default (props) => (
    <nav id="navbar" className="navbar navbar-dark bg-dark" >
        <div>
            <form className="form-inline" onSubmit={props.onSubmit} >
                {/* <Link to="/" > <img id="img-navbar" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> */}
                <input
                    className="form-control mr-sm-2"
                    type="search" placeholder="Search Movie"
                    aria-label="Search"
                    onChange={props.handleChange}
                ></input>
                <button className="btn btn-primary" type="submit">Search Movie </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="navbar-brand" to="/">Home</Link>
            </form>
        </div>
        <div>
            {props.user.email &&
                <Link className="navbar-brand" to="/user">{props.user.email}</Link>
            }
            {props.user.email &&
                <Link onClick={props.logout} className="navbar-brand" to="/">Logout</Link>
            }
            {!props.user.email &&
                <Link className="navbar-brand" to="/register">Register</Link>
            }
            {!props.user.email &&
                <Link className="navbar-brand" to="/login">Login</Link>
            }
        </div>
    </nav>
)
