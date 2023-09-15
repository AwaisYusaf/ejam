import Image from 'next/image'
import TopBar from '@/components/TopBar'
import NavBar from '@/components/NavBar'
import Stepper from '@/components/Stepper'
import ProductDetails from '@/components/ProductDetails'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <TopBar />
      <div className='lg:w-[80%] md:w-[90%] w-[95%]  mx-auto flex-1'>
        <NavBar />
        <h1 className='text-center text-4xl font-medium'>Wait ! your order in progress.</h1>
        <p className='text-center text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        <Stepper />
        <ProductDetails />
      </div>
      <Footer />
    </main>
  )
}
