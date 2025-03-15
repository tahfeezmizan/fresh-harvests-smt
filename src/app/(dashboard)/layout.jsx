import React from 'react'
import LeftSideBar from '../components/shared/LeftSideBar'
import TopBar from '../components/shared/TopBar'

export default function DashboardLayout({ children }) {
    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-2">
                <LeftSideBar />
            </div>
            <div className="col-span-10 h-screen overflow-hidden text-black">
                <TopBar />
                {children}
            </div>
        </div>
    )
}
