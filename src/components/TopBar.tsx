import Image from 'next/image'
import React from 'react'

type Props = {}

function TopBar({ }: Props) {
    return (
        <div className='bg-[#252F3D] text-white py-3'>
            <div className='flex justify-between lg:w-[80%] mx-auto'>
                <div className="flex items-center space-x-2">
                    <Image className='h-auto w-6' src="/assets/top-bar/1.png" alt="logo" width={50} height={50} />
                    <p className='text-sm uppercase'>30-DAY SATISFACTION GUARANTEE</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Image className='h-auto w-6' src="/assets/top-bar/2.png" alt="logo" width={50} height={50} />
                    <p className='text-sm uppercase'>Free delivery on orders over $40.00</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Image className='h-auto w-6' src="/assets/top-bar/3.png" alt="logo" width={50} height={50} />
                    <p className='text-sm uppercase'>50.000+ HAPPY CUSTOMERS</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Image className='h-auto w-6' src="/assets/top-bar/4.png" alt="logo" width={50} height={50} />
                    <p className='text-sm uppercase'>100% Money Back Guarantee</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar