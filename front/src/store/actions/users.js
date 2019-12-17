import axios from "axios";

export const fetchUser = (user) => ({
    type: 'LOGIN_USER',
    user: user
});


export const getUser = () => dispatch => {
    axios
        .get('/api/user/me')
        .then(res => {
            return res.data
        })
        .then(user => {
            return dispatch(fetchUser(user));
        });
}





