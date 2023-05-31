import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import AxiosEnstance from './Axios';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [value, setValue] = useState({});
    const history = useHistory()

    const changevalue = (e) => {
        setValue(
            {
                ...value,
                [e.target.name]: [e.target.value]
            }
        )
    }

    const loginchange = () => {
        AxiosEnstance
            .post('http://127.0.0.1:8000/api/token/', {
                user_name: value.username,
                password: value.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                console.log(res.data)
                AxiosEnstance.defaults.headers['Authorization'] =
                    'JWT' + localStorage.getItem('access_token');
                history.pushState('/');
            }).catch((error) => alert(error.message));
    }

    return (
        <div>
            <input onChange={changevalue} name='username' type='text' placeholder='Enter username' /><br />
            <input type='password' onChange={changevalue} name='password' placeholder='Enter password' />
            <Button type='submit' onClick={loginchange}>Login</Button>
        </div>
    )
}

export default Login
