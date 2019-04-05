import axios from 'axios';

const API_URL = 'http://localhost:3001';

const headers = {
    'Authorization': 'AIzaSyCVijyE3y4x81JqmZH0Wb4Ie7U5l0FELn0',
    'Content-Type': 'application/json'
};

const API = axios.create({
    baseURL: API_URL,
    headers
});

export default API