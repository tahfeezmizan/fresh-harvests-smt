'use client';
import { useParams } from 'next/navigation';
import React from 'react'

export default function UpdateProfile() {
    const { id } = useParams();
    console.log(id)
    return (
        <div>page</div>
    )
}
