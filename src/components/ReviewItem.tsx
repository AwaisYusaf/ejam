import Image from 'next/image'
import VerifiedCustomerIcon from './VerifiedCustomerIcon'

export default function ReviewItem() {
    return <div className='p-6 bg-white rounded-lg'>
        <div className='flex items-center space-x-4'>
            <Image className='w-auto h-20' src='/assets/review-img.png' width={500} height={500} alt="-" />
            <div className='flex flex-col space-y-2'>
                <div className='flex items-center space-x-1'>
                    <Image className='w-auto h-5' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                    <Image className='w-auto h-5' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                    <Image className='w-auto h-5' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                    <Image className='w-auto h-5' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                    <Image className='w-auto h-5' src='/assets/rating-star.png' width={500} height={500} alt="-" />
                </div>
                <div className='flex items-center space-x-4'>
                    <h1 className='text-xl font-bold'>Ken T.</h1>
                    <VerifiedCustomerIcon />
                </div>
            </div>
        </div>
        <p className='text-lg leading-snug mt-4'>
            {"“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”"}
        </p>
    </div>
}