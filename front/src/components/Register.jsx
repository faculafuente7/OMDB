import React from 'react';

export default (props) => (
    <form id="form-register-id" onSubmit={props.onSubmit} >
        <div className="form-group">
            <label for="inputName" >Name</label>
            <input onChange={props.handleChangeName} type="name" className="form-control" id="inputName" placeholder="Enter Name"></input>
        </div>
        <div className="form-group">
            <label for="inputLastName" >Last Name</label>
            <input onChange={props.handleChangeLastName} type="" className="form-control" id="inputLastName" placeholder="Enter Last Name"></input>
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={props.handleChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={props.handleChangePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>

        <button type="submit" className="btn btn-dark">Register</button>
    </form>
)
