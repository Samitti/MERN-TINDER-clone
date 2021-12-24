import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-samitti.herokuapp.com/'
});

export default instance;
