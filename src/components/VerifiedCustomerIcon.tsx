import Image from 'next/image'

export default function VerifiedCustomerIcon() {
    return <div className='flex items-center space-x-2'>
        <Image className='w-auto h-5' src='/assets/verify-tick.png' width={500} height={500} alt="-" />
        <p className='text-[#5BB59A]'>Verified Customer</p>
    </div>
}
