import React from 'react'
import Image from 'next/image'

type Props = {}

function CardsBar({ }: Props) {
    return (
        <div className='flex justify-around flex-wrap mt-6 text-xs p-2 text-gray-400 font-medium border-2 border-gray-400 rounded-md'>
            <div className='flex items-center justify-center flex-1 border-r-2 border-gray-400'>
                <p>Free Shipping</p>
            </div>
            <div className='flex items-center px-2 space-x-2 justify-center flex-1 lg:border-r-2 border-r-0 border-gray-400'>
                <Image className='w-auto h-4' src='/assets/lock.png' width={500} height={500} alt="-" />
                <p className='truncate'>Secure 256-bit SSL encryption.</p>
            </div>
            <div className='px-2 flex items-center justify-center lg:flex-1 lg:w-auto w-full lg:pt-0 lg:mt-0 pt-2 mt-2 lg:border-t-0 border-t-2 border-gray-400'>
                <Image className='w-auto h-4' src='/assets/visa.png' width={250} height={100} alt="-" />
                <Image className='w-auto h-4' src='/assets/shop-pay.png' width={250} height={100} alt="-" />
                <Image className='w-auto h-4' src='/assets/paypal.png' width={250} height={100} alt="-" />
                <Image className='w-auto h-4' src='/assets/mastercard.png' width={250} height={100} alt="-" />
                <Image className='w-auto h-4' src='/assets/gpay.png' width={250} height={100} alt="-" />
                <Image className='w-auto h-4' src='/assets/apple-pay.png' width={250} height={100} alt="-" />
                <Image className='w-auto h-4' src='/assets/amex.png' width={250} height={100} alt="-" />
            </div>
        </div>
    )
}

export default CardsBar