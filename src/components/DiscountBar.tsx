import Image from "next/image"

export default function DiscountBar() {
    return <div className='flex items-center space-x-2 bg-blue-50 rounded-md p-4 my-6'>
        <Image className='w-auto h-7' src='/assets/discount-icon.png' width={500} height={500} alt="-" />
        <p>Save <span className='text-blue-600'>53%</span> and get <span className='text-blue-600'>6 extra Clarifision</span> for only <span className='text-blue-600'>$14 Each.</span></p>
    </div>
}
