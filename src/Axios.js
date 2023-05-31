import React from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/';

const AxiosEnstance = axios.create({
    baseurl: baseUrl,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT' + localStorage.getItem('refresh_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
})
console.log(AxiosEnstance)
export default AxiosEnstance;
