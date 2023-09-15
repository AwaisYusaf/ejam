import Image from 'next/image'
import React from 'react'

type Props = {}


function Step({ iconSrc, title, status, number }: { iconSrc?: string, title?: string, status?: string, number: number }) {
    return <div className='flex items-center space-x-2'>
        {status === "Completed" ?
            <Image className='h-auto w-7' src="/assets/stepper/completed.png" alt="logo" width={50} height={50} />
            :
            <p className={`w-7 h-7 text-center text-sm flex items-center justify-center rounded-full border-2 border-blue-600 ${status === "Active" ? "bg-blue-600 text-white" : "text-blue-600 bg-white"} font-semibold`}>{number}</p>
        }
        <p className='font-medium lg:text-base text-sm'><span className='lg:inline hidden'>Step {number} : </span>{title}</p>
    </div>
}


const steps = [
    {
        title: 'Cart Review',
        status: 'Completed'
    },
    {
        title: 'Checkout',
        status: 'Completed'
    },
    {
        title: 'Special Offer',
        status: 'Active'
    },
    {
        title: 'Confirmation',
        status: 'Pending'
    },

]

//Step: Pending | Active | Completed

function Stepper({ }: Props) {
    return (
        <div className='flex items-center justify-between py-6'>
            {steps.map((step, index) => {
                return <Step key={index} number={index + 1} title={step.title} status={step.status} />
            })}
        </div>
    )
}

export default Stepper