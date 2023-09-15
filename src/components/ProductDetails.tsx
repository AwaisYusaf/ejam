import Image from 'next/image'
import React from 'react'
import ReviewItem from './ReviewItem'
import DiscountBar from './DiscountBar'
import CardsBar from './CardsBar'

type Props = {}


const features = [
    {
        content: <p>Negative Ion Technology may <strong>help with allergens</strong></p>
    },
    {
        content: <p>Designed for <strong>air rejuvenation</strong></p>
    },
    {
        content: <p><strong>Perfect for every room</strong>  in all types of places.</p>
    },
]


function DetailsOverview() {
    return <div className='flex space-x-4 my-3'>
        <Image className='w-auto h-auto' src='/assets/product-image.png' width={500} height={500} alt="-" />
        <div className='flex flex-col justify-between'>
            <div className='flex items-center space-x-4'>
                <p className='flex-1 text-xl font-semibold'>Clarifion Air Ionizer</p>
                <p className='line-through text-gray-400 font-medium'>$180</p>
                <p className='text-[#2C7EF8] font-semibold text-lg'>$84</p>
            </div>
            <div className='flex items-center space-x-1'>
                <Image className='w-auto h-4' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                <Image className='w-auto h-4' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                <Image className='w-auto h-4' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                <Image className='w-auto h-4' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                <Image className='w-auto h-4' src='/assets/rating-star.png' width={500} height={500} alt="-" />
            </div>
            <div className='flex items-center space-x-2'>
                <Image className='w-auto h-3' src='/assets/live.png' width={500} height={500} alt="-" />
                <p className='text-sm text-gray-500'>12 left in Stock</p>
            </div>
            <p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
        </div>
    </div>
}


function ProductDetails({ }: Props) {
    return (
        <div className='flex lg:p-8 p-2 bg-gray-50 rounded-md mb-8 lg:space-x-8 space-x-0'>
            <div className='lg:basis-1/2 lg:flex hidden flex-col space-y-5'>
                <Image className='w-auto h-auto' src='/assets/product-img1.png' width={500} height={500} alt="-" />
                <ReviewItem />
            </div>
            <div className='lg:basis-1/2'>
                <h2 className='text-3xl font-medium capitalize leading-snug'>
                    <span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className='text-[#2C7EF8]'>$14 each</span> ($84.00 total!)
                </h2>
                <Image className='w-full h-auto lg:hidden md:block hidden' src='/assets/product-img1.png' width={500} height={500} alt="-" />

                <DetailsOverview />
                {
                    features.map((feature: any, index: number) => {
                        return <div className='flex items-center space-x-2 mt-2'>
                            <Image className='w-auto h-5' src='/assets/blue-tick.png' width={500} height={500} alt="-" />
                            {feature.content}
                        </div>
                    })
                }
                <DiscountBar />
                <button className='bg-[#59AE43] hover:bg-[#40902c] flex rounded-full lg:py-4 py-2 text-white w-full items-center justify-center space-x-4'>
                    <p className='lg:text-xl text-lg uppercase'>Yes - Claim my discount</p>
                    <Image className='w-auto h-4' src='/assets/arrow-right.png' width={500} height={500} alt="-" />
                </button>
                <CardsBar />
                <button className='w-full my-6'>
                    <p className='underline text-red-500 lg:text-3xl text-lg uppercase text-center'>No thanks, I don’t want this.</p>
                </button>
                <div className='flex items-center space-x-3'>
                    <Image className='w-auto h-32' src='/assets/sg.png' width={500} height={500} alt="-" />
                    <p className='lg:text-xl text-base'>If you are not completely thrilled with your Clarifion -
                        We have a <strong>30 day satisfaction guarantee.</strong> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails