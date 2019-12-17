import React from 'react';

export default (props) => (
    <form id="form-login-id" onSubmit={props.onSubmit} >
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={props.handleChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={props.handleChangePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>

        <button type="submit" className="btn btn-dark">Submit</button>
    </form>
)
