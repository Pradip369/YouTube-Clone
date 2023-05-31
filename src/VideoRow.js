import React from 'react'
import './VideoRow.css'

const VideoRow = ({ subs, description, title, image, channel, views, timestamp }) => {
    return (
        <div className='videoRow'>
            <img src={image} alt={channel} />
            <div className='videoRow__text'>
                <h3>
                    {title}
                </h3>
                <p className='videoRow__headline'>
                    {channel} • <span className='videoRow__sub'><span className='videoRow__subnumber'>{subs}</span> Subscribers</span> • {views} Views • {timestamp}
                </p>
                <p className='videoRow__description'>{description}</p>
            </div>

        </div>
    )
}

export default VideoRow
