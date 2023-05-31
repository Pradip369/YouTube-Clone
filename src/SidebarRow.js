import React from 'react'
import './SidebarRow.css'

const SidebarRow = ({ Icon, title }) => {
    return (
        <div className='sidebarRow'>
            <Icon className='sidebarRor__icon' />
            <h2 className='sidebar__title'>{title}</h2>
        </div>
    )
}

export default SidebarRow
