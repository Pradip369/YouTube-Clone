import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h3>Filter</h3>
            </div>
            <hr />
            <ChannelRow
                image=""
                channel='shreeji'
                verified={true}
                subs='660k'
                noOfvideos={368}
                description='Hello my friends.....'
            />
            <hr />
            <VideoRow
                subs={3025}
                description='Hello Word Hello Word Hello Word Hello Word Hello Word'
                title='Pradip Star'
                image='...'
                channel='Shreeji'
                views='32 B'
                timestamp='3 days ago'
            />
        </div>
    )
}

export default SearchPage

