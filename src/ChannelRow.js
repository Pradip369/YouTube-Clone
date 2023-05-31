import { Avatar } from '@material-ui/core';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import React from 'react';
import './ChannelRow.css';

const ChannelRow = ({ image, channel, verified, subs, noOfvideos, description }) => {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow__logo' src={image} alt='logo' />
            <div className='channelRow__text'>
                <h4>
                    {channel}{verified && <VerifiedUserOutlinedIcon />}
                </h4>
                <p>
                    {subs} subscribers • {noOfvideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
