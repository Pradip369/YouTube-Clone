import React from 'react';
import './Sidebar.css'
import VideoCard from './VideoCard';

const RecommendedVideo = () => {
    return (
        <div className='recommendedvideo'>
            <h5>Recommended</h5>
            <div className='recommendedvideo__videos'>
                <VideoCard
                    image=''
                    title='Hello Word'
                    channel='Shreeji'
                    views='10.1M Views'
                    timestamp='3 Days ago'
                    channelImage=''
                />
            </div>
        </div>
    )
}

export default RecommendedVideo
