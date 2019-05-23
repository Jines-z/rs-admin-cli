import React from 'react'
import SideMenu from '@/components/SideMenu'
import logo from '@/statics/logo.png'

const Left = () => {
    return (
        <div className='left'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <SideMenu />
        </div>
    )
}

export default Left
