'use client';
import { useParams } from 'next/navigation';
import React, { use } from 'react'

export default function UpdateProfile() {
    const { id } = useParams();

    const userData = localStorage.getItem('decoded-user');


    console.log(use)
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
