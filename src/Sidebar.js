import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow Icon={HomeIcon} title='Home' />
            <SidebarRow Icon={WhatshotIcon} title='Trending' />
            <SidebarRow Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title='Library' />
            <SidebarRow Icon={HistoryIcon} title='History' />
            <SidebarRow Icon={OndemandVideoIcon} title='Your Videos' />
            <SidebarRow Icon={WatchLaterIcon} title='Watch Later' />
            <SidebarRow Icon={ThumbUpIcon} title='Liked videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Show More' />
            <hr />
        </div>
    )
}

export default Sidebar
