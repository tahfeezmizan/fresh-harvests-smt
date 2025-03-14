import LeftSideBar from '@/app/components/LeftSideBar/LeftSideBar'
import React from 'react'

export default function page({ children }) {
    return (
        <div className="flex">
            <LeftSideBar />
            <main className="flex-grow p-4">{children}</main>
        </div>
    )
}
