import axios from "axios";

const ENDPOINT_PATH = "https://ky23idqdol.execute-api.us-east-2.amazonaws.com/api/v1/";

axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`

export default {
    signup(username, password ) {
        const params = { username, password };
        return axios.post(ENDPOINT_PATH + "signup", params);
    },
    confirmation(username, confirmation_code) {
        const params = { username, confirmation_code };
        return axios.post(ENDPOINT_PATH + "confirm", params);
    },
    signin(username, password) {
        const params = { username, password };
        return axios.post(ENDPOINT_PATH + "signin", params);
    },
    signout(access_token) {
        const params = { access_token };
        return axios.post(ENDPOINT_PATH + "signout", params);
    }
};