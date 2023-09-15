import Image from 'next/image'
import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <div className='bg-[#252F3D] text-white py-5'>
            <div className='flex justify-between lg:flex-row flex-col items-center lg:space-y-0 space-y-3 lg:w-[80%] mx-auto'>
                <div className='flex items-center divide-x-2 divide-gray-400'>
                    <p className='px-3'>Copyright (c) 2023</p>
                    <p className='px-3'>Clarifionsupport@clarifion.com</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <Image className='w-auto h-5' src='/assets/lock-white.png' width={50} height={50} alt="-" />
                    <p>Secure 256-bit SSL encryption.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer