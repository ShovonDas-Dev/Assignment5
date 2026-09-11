import React from 'react'
import banner from "../assets/banner-stack.png"
const HeroSection = () => {
    return (
        <div >
            <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center '>
                {/* Hero left side */}
                <div className='md:col-span-7 flex flex-col justify-center '>
                    <h1 className='text-4xl md:text-5xl font-bold bg-linear-to-r/oklab from-red-600 via-violet-600 to-indigo-300 bg-clip-text text-transparent'>Build Your Ideal</h1>
                    <h1 className='text-4xl md:text-5xl font-bold'>Development Stack</h1>

                    <p className='text-gray-00 my-10'>Explore frontend, backend, database, and tooling options, <br /> compare them side by side, and put together the stack that fits your <br /> next project.</p>

                    {/* Button */}
                    <div className="flex items-center gap-4">
                        
                        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-indigo-200 font-semibold text-sm shadow-sm hover:opacity-95 transition-opacity cursor-pointer">
                            Explore Technologies
                        </button>

                        
                        <button className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-slate-600 font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer hover:shadow-md">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* Hero right side */}
                <div className='mx-auto md:col-span-5 flex justify-center items-center  '>
                    <img src={banner} alt="" />
                </div>

                {/* END sign */}

                <div className="flex justify-center align-center mt-10 md:mt-0 md:col-span-12">
                    <span className="w-12 h-1  bg-red-400 "></span>
                </div>

            </div>
        </div>
    )
}

export default HeroSection
