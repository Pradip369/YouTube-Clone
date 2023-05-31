import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    const [searchInput, setSearchInput] = useState('');

    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <MenuIcon />
                    <Link to='/'>
                        <img
                            className='header__logo'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/400px-YouTube_Logo_2017.svg.png'
                            alt='logo'
                        />
                    </Link>
                </div>

                <Link to='/login'>Login</Link>

                <div className='header__input'>
                    <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder='Search' type='text' />
                    <Link to={`/search/${searchInput}`}>
                        <SearchIcon className='header__inputbutton' />
                    </Link>
                </div>

                <div className='header__icons'>
                    <VideoCallSharpIcon className='header__icon' />
                    <AppsIcon className='header__icon' />
                    <NotificationsIcon className='header__icon' />
                    <Avatar
                        className='header__icon'
                        alt='avatar'
                        src=''
                    />
                </div>

            </div>
        </>
    )
}

export default Header
