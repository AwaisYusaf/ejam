"use client";
import Image from 'next/image'
import React from 'react'

type Props = {}

function TopBar({ }: Props) {
    const [activeItem, setActiveItem] = React.useState(0);

    const items = [
        {
            content: <div className="flex items-center space-x-2">
                <Image className='h-auto w-6' src="/assets/top-bar/1.png" alt="logo" width={50} height={50} />
                <p className='text-sm uppercase'>30-DAY SATISFACTION GUARANTEE</p>
            </div>

        },
        {
            content: <div className="flex items-center space-x-2">
                <Image className='h-auto w-6' src="/assets/top-bar/2.png" alt="logo" width={50} height={50} />
                <p className='text-sm uppercase'>Free delivery on orders over $40.00</p>
            </div>

        },
        {
            content: <div className="flex items-center space-x-2">
                <Image className='h-auto w-6' src="/assets/top-bar/3.png" alt="logo" width={50} height={50} />
                <p className='text-sm uppercase'>50.000+ HAPPY CUSTOMERS</p>
            </div>
        },
        {
            content:
                <div className="flex items-center space-x-2">
                    <Image className='h-auto w-6' src="/assets/top-bar/4.png" alt="logo" width={50} height={50} />
                    <p className='text-sm uppercase'>100% Money Back Guarantee</p>
                </div>

        },
    ]


    return (
        <>
            <div className='bg-[#252F3D] text-white py-3 hidden lg:flex'>
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
            <div className='bg-[#252F3D] text-white py-3 lg:hidden'>
                <div className='flex justify-between w-[95%] mx-auto'>
                    <button onClick={() => activeItem > 0 ? setActiveItem(activeItem - 1) : ""}>
                        <Image className='h-auto w-6 rotate-180' src="/assets/arrow.png" alt="logo" width={50} height={50} />
                    </button>
                    {items[activeItem].content}
                    <button onClick={() => activeItem < 3 ? setActiveItem(activeItem + 1) : ""}>
                        <Image className='h-auto w-6' src="/assets/arrow.png" alt="logo" width={50} height={50} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TopBar