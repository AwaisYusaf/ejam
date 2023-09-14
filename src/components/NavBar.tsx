import Image from 'next/image'
import React from 'react'

type Props = {}

function NavBar({ }: Props) {
    return (
        <nav className='flex items-center space-x-4 py-3'>
            <div className='flex-1'>
                <Image className="w-auto h-8" src="/assets/logo.png" width={200} height={100} alt="-" />
            </div>
            <Image className="w-auto h-8" src="/assets/mcafee.png" width={200} height={100} alt="-" />
            <Image className="w-auto h-8" src="/assets/norton.png" width={200} height={100} alt="-" />
        </nav>
    )
}

export default NavBar